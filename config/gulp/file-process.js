const { parallel } = require("gulp");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const del = require("del");

/**
 * Set input and output directories for image processing
 */
const processImagesDirectory = "./content/uploads/_working-images/to-process";
const processedImagesDirectory = "./content/uploads/_working-images/processed";

// /Users/nlyons/Documents/gsa/digitalgov.gov/config/gulp/content/uploads/_working-images/to-process/accessibility-for-teams-guide.jpg

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
 * Read image(s) in the upload directory
 */
async function processImages() {
  fs.readdir(`${processImagesDirectory}`, (err, images) => {
    for (let image of images) {
      processImageVariants(image);
    }
    if (err) {
      process.output.write(
        `Error cleaning and copying file [${image}]
            Error message: ${err.message}`
      );
    }
  });
}

/**
 * Create resized and renamed image for each variant setting
 * New image filename will read 'name-of-image_w200.jpg'
 *
 * @param {string} image - name of the image
 */
async function processImageVariants(image) {
  for (let imageVariant in variantSettings) {
    await createResponsiveVariant(image, variantSettings[imageVariant]).catch(
      (err) => {
        console.error(
          `Failed to process variant ${variantSettings[imageVariant].width}:`,
          err
        );
      }
    );
  }
}

/**
 * Create the variant with the sharp package
 *
 * @param {string} imageToProcess - name of the image file
 * @param {number} variantSetting - variant size and name
 */
async function createResponsiveVariant(imageToProcess, imageVariantSetting) {
  const imageName = imageToProcess.split(".")[0];
  const imageExtension = imageToProcess.split(".")[1];
  // get the full filepath for the provided image
  const image = path.join(
    __dirname,
    `${processImagesDirectory}`,
    imageToProcess
  );

  await sharp(image)
    .resize(imageVariantSetting.width)
    .toFile(
      `${processedImagesDirectory}/${imageName}${imageVariantSetting.suffix}.${imageExtension}`,
      (err, info) => {
        if (err) {
          console.error(`Error processing variant ${image}:`, err);
        } else {
          console.log(`Processed variant ${image} successfully: `, info);
        }
      }
    );
}

/**
 * Removes the /to-process temporary working folder after variants are created
 */
function removeProcessedImage() {
  console.log("Removing processed images");
  return del([`content/uploads/_working-images/to-process/*}`]);
}

exports.do = parallel(processImages, removeProcessedImage);
