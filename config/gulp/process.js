"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const sharp = require("sharp");
const promises_1 = __importDefault(require("fs/promises"));
const path = require("path");
const del = require("del");
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
function getImagePath(image) {
    const imagePath = path.join(path.resolve(), `${processImagesDirectory}`, image);
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
    await sharp(`${imageToProcess.path}`).toFile(`${processedImagesDirectory}/${imageToProcess.name}${imageToProcess.extension}`, (err) => {
        if (err) {
            console.error(`Error processing variant ${imageToProcess.path}:`, err);
        }
    });
}
/**
 * Create webp variants with the sharp package
 *
 * @param {string} imageToProcess - name of the image file
 * @param {number} variantSetting - variant size and name
 */
async function createResponsiveVariant(imageToProcess, imageVariantSetting) {
    await sharp(`${imageToProcess.path}`)
        .resize(imageVariantSetting.width)
        .webp()
        .toFile(`${processedImagesDirectory}/${imageToProcess.name}${imageVariantSetting.suffix}.webp`, (err) => {
        if (err) {
            console.error(`Error processing variant ${imageToProcess.path}:`, err);
        }
    });
}
/**
 * Create resized and renamed image for each variant setting
 * New image filename will read 'name-of-image_w200.webp'
 *
 * @param {string} image - name of the image
 */
async function processImageVariants(image) {
    Object.entries(variantSettings).forEach(([key, imageVariant]) => createResponsiveVariant(image, imageVariant).catch((err) => {
        console.error(`Failed to process variant ${key}:`, err);
    }));
}
/**
 * Removes the /to-process temporary working folder after variants are created
 */
async function removeProcessedImage() {
    const imageDir = "content/uploads/_working-images/processed";
    const toProcessDir = "content/uploads/_working-images/to-process";
    try {
        await promises_1.default.access(imageDir, promises_1.default.constants.F_OK);
        const files = await promises_1.default.readdir(imageDir);
        if (files.length > 0) {
            await del([toProcessDir]);
        }
    }
    catch (error) {
        console.error("Error accessing directory:", error);
        throw error;
    }
}
/**
 * Read image(s) in the upload directory
 */
async function processImages() {
    try {
        const images = await promises_1.default.readdir(processImagesDirectory);
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
    }
    catch (error) {
        // instead this error is thrown when directory is empty
        console.error("Error processing images:", error);
        // throw error;
    }
    finally {
        await removeProcessedImage();
    }
}
module.exports = processImages;
