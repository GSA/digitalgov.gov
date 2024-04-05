const { parallel } = require("gulp");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const del = require("del");

// TODO:
// - [x] compress original file, refactor code
// - [ ] fix file not found bug
// - [ ] fix https://app.circleci.com/pipelines/github/GSA/digitalgov.gov/19407/workflows/bf81f99c-5c44-4c44-8970-4cc36e15fea2/jobs/53101
// - [ ] test with aws
// - [ ] regression test respnsive image srcset with 200, 400, 800

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
 * Read image(s) in the upload directory
 */
async function processImages() {
  fs.readdir(`${processImagesDirectory}`, (err, images) => {
    for (let imageToProcess of images) {
      imageToProcess = getImageDetails(imageToProcess);
      processImageOriginal(imageToProcess);
      processImageVariants(imageToProcess);
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
 * Separate image name, extension and directory path and return as an object
 *
 * @param {string} image - original image filename
 */

function getImageDetails(image) {
  const imageVariant = {};
  imageVariant.name = image.split(".")[0];
  imageVariant.extension = image.split(".")[1];
  // get the full filepath for the provided image
  imageVariant.path = path.join(__dirname, `${processImagesDirectory}`, image);

  return imageVariant;
}

/**
 * Create compressed original image
 *
 * @param {string} imageToProcess - image name
 */
async function processImageOriginal(imageToProcess) {
  // const image = getImageDetails(imageToProcess);

  await sharp(imageToProcess.path).toFile(
    `${processedImagesDirectory}/${imageToProcess.name}.${imageToProcess.extension}`,
    (err, info) => {
      if (err) {
        console.error(`Error processing variant ${imageToProcess.path}:`, err);
      } else {
        console.log(
          `Processed variant ${imageToProcess.path} successfully: `,
          info
        );
      }
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
  // const image = getImageDetails(imageToProcess);

  await sharp(imageToProcess.path)
    .resize(imageVariantSetting.width)
    .toFile(
      `${processedImagesDirectory}/${imageToProcess.name}${imageVariantSetting.suffix}.${imageToProcess.extension}`,
      (err, info) => {
        if (err) {
          console.error(
            `Error processing variant ${imageToProcess.path}:`,
            err
          );
        } else {
          console.log(
            `Processed variant ${imageToProcess.path} successfully: `,
            info
          );
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
