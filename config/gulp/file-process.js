const { series } = require("gulp");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const del = require("del");

/**
 * Set input and output directories for image processing
 */
const processImagesDirectory = "./content/uploads/_working-images/to-process";
const processedImagesDirectory = "./content/uploads/_working-images/processed";

/**
 * Settings object for each image variant width and suffix
 * Device name is not used in image name
 */
const variantSettings = {
  mobile: {
    width: 200,
    suffix: "_w200",
  },
  tablet: {
    width: 400,
    suffix: "_w400",
  },
  desktop: {
    width: 800,
    suffix: "_w800",
  },
};

/**
 * Returns file system image path
 *
 * @param {image} image - original image filename
 */
function getImagePath(image) {
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

function getImageDetails(image) {
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
async function processImageOriginal(imageToProcess) {
  await sharp(`${imageToProcess.path}`).toFile(
    `${processedImagesDirectory}/${imageToProcess.name}${imageToProcess.extension}`,
    (err) => {
      if (err)
        console.error(`Error processing variant ${imageToProcess.path}:`, err);
    }
  );
}

/**
 * Create the variant with the sharp package
 *
 * @param {string} imageToProcess - name of the image file
 * @param {number} variantSetting - variant size and name
 */
async function createResponsiveVariant(imageToProcess, imageVariantSetting) {
  await sharp(`${imageToProcess.path}`)
    .resize(imageVariantSetting.width)
    .toFile(
      `${processedImagesDirectory}/${imageToProcess.name}${imageVariantSetting.suffix}${imageToProcess.extension}`,
      (err) => {
        if (err)
          console.error(
            `Error processing variant ${imageToProcess.path}:`,
            err
          );
      }
    );
}

/**
 * Create resized and renamed image for each variant setting
 * New image filename will read 'name-of-image_w200.jpg'
 *
 * @param {string} image - name of the image
 */
async function processImageVariants(image) {
  Object.values(variantSettings).forEach((imageVariant) => {
    createResponsiveVariant(image, imageVariant).catch((err) => {
      console.error(
        `Failed to process variant ${variantSettings[imageVariant].width}:`,
        err
      );
    });
  });
}

/**
 * Read image(s) in the upload directory
 */
async function processImages() {
  fs.readdir(`${processImagesDirectory}`, (err, images) => {
    // images.length returns undefined when no images exist
    if (images === undefined) {
      console.error("No images to process");
    }
    if (!err) {
      images.forEach((image) => {
        const imageToProcess = getImageDetails(image);
        processImageOriginal(imageToProcess);
        processImageVariants(imageToProcess);
      });
    } else {
      console.error(`Error processing file: [${images}]. ${err.message}`);
    }
  });
}

/**
 * Removes the /to-process temporary working folder after variants are created
 */
function removeProcessedImage() {
  console.log("Removing processed images");
  return del([`content/uploads/_working-images/to-process/*}`]);
}

exports.do = series(processImages, removeProcessedImage);
