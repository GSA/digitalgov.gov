import sharp = require("sharp");
import fs from "fs/promises";
import path = require("path");
import del = require("del");

// Constants
const processImagesDirectory = "./content/uploads/_working-images/to-process";
const processedImagesDirectory = "./content/uploads/_working-images/processed";

/**
 * Settings object for each image variant width and suffix
 * Device name is not used in image name
 */
const variantSettings = {
  mobile: {
    width: 800,
    suffix: "_w800",
  },
  desktop: {
    width: 1200,
    suffix: "_w1200",
  },
};

/**
 * Returns file system image path
 *
 * @param {image} image - original image filename
 */
function getImagePath(image: string): {
  dir: string;
  name: string;
  ext: string;
} {
  const imagePath = path.join(
    path.resolve(),
    `${processImagesDirectory}`,
    image
  );
  return path.parse(imagePath);
}

/**
 * Separate image name, extension and directory path and return as an object
 *
 * @param {string} image - original image filename
 */
function getImageDetails(image: string): {
  name: string;
  extension: string;
  path: string;
} {
  const imageData = getImagePath(image);
  return {
    name: imageData.name,
    extension: imageData.ext,
    path: `${imageData.dir}/${imageData.name}${imageData.ext}`,
  };
}

/**
 * Create compressed original image
 *
 * @param {string} imageToProcess - image name
 */
async function processImageOriginal(imageToProcess: {
  name: string;
  extension: string;
  path: string;
}): Promise<void> {
  await sharp(`${imageToProcess.path}`).toFile(
    `${processedImagesDirectory}/${imageToProcess.name}${imageToProcess.extension}`,
    (err) => {
      if (err) {
        console.error(`Error processing variant ${imageToProcess.path}:`, err);
      }
    }
  );
}

/**
 * Create webp variants with the sharp package
 *
 * @param {string} imageToProcess - name of the image file
 * @param {number} variantSetting - variant size and name
 */
async function createResponsiveVariant(
  imageToProcess: { name: string; extension: string; path: string },
  imageVariantSetting: { width: number; suffix: string }
): Promise<void> {
  await sharp(`${imageToProcess.path}`)
    .resize(imageVariantSetting.width)
    .webp()
    .toFile(
      `${processedImagesDirectory}/${imageToProcess.name}${imageVariantSetting.suffix}.webp`,
      (err) => {
        if (err) {
          console.error(
            `Error processing variant ${imageToProcess.path}:`,
            err
          );
        }
      }
    );
}

/**
 * Create resized and renamed image for each variant setting
 * New image filename will read 'name-of-image_w200.webp'
 *
 * @param {string} image - name of the image
 */
async function processImageVariants(image: {
  name: string;
  extension: string;
  path: string;
}): Promise<void> {
  Object.entries(variantSettings).forEach(([key, imageVariant]) =>
    createResponsiveVariant(image, imageVariant).catch((err) => {
      console.error(`Failed to process variant ${key}:`, err);
    })
  );
}

/**
 * Removes the /to-process temporary working folder after variants are created
 */
async function removeProcessedImage(): Promise<void> {
  const imageDir = "content/uploads/_working-images/processed";
  const toProcessDir = "content/uploads/_working-images/to-process";

  try {
    await fs.access(imageDir, fs.constants.F_OK);
    const files = await fs.readdir(imageDir);
    if (files.length > 0) {
      await del([toProcessDir]);
    }
  } catch (error) {
    console.error("Error accessing directory:", error);
    throw error;
  }
}

/**
 * Read image(s) in the upload directory
 */
async function processImages(): Promise<void> {
  try {
    const images = await fs.readdir(processImagesDirectory);

    // should be catching the error here when no images exist in current directory
    if (images.length === 0) {
      console.log("No images found in the directory");
      return;
    }

    console.log("PROCESSING IMAGES");
    const processingPromises = images.map(async (image) => {
      const imageToProcess = getImageDetails(image);
      return Promise.all([
        processImageOriginal(imageToProcess),
        processImageVariants(imageToProcess),
      ]);
    });

    await Promise.all(processingPromises);
  } catch (error) {
    // instead this error is thrown when directory is empty
    console.error("Error processing images:", error);
    // throw error;
  } finally {
    await removeProcessedImage();
  }
}

export = processImages;
