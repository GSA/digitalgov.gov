const { src, dest, parallel } = require("gulp");
const del = require("del");
const responsive = require("gulp-responsive");

/**
 * Retrieves images from /to-process and creates responsive variants saved to /processed
 * Creates 33 image variants of png/jpg and webp
 * Sizes: 200, 400, 600, 800, 1200, 1600, 2400
 * Creates black and white versions which are not needed
 * TODO: Needs to refactor this to create smaller set of variants and options
 */
function variants() {
  return (
    src(`content/uploads/_working-images/to-process/*`)
      // Create responsive variants
      .pipe(
        responsive(
          {
            "*": [
              {
                width: 200,
                rename: {
                  suffix: "_w200",
                },
              },
              {
                width: 200,
                rename: {
                  suffix: "_w200",
                  extname: ".webp",
                },
              },
              {
                width: 400,
                rename: {
                  suffix: "_w400",
                },
              },
              {
                width: 400,
                rename: {
                  suffix: "_w400",
                  extname: ".webp",
                },
              },
              {
                width: 600,
                rename: {
                  suffix: "_w600",
                },
              },
              {
                width: 600,
                rename: {
                  suffix: "_w600",
                  extname: ".webp",
                },
              },
              {
                width: 800,
                rename: {
                  suffix: "_w800",
                },
              },
              {
                width: 800,
                rename: {
                  suffix: "_w800",
                  extname: ".webp",
                },
              },
              {
                // Empty case to produce a copy of the original
              },
            ],
          },
          {
            // Global configuration for all images
            quality: 80,
            compressionLevel: 7,
            progressive: true,
            withMetadata: false,
            errorOnUnusedConfig: false,
            skipOnEnlargement: true,
            errorOnEnlargement: false,
            silent: true,
          }
        )
      )
      .pipe(dest("content/uploads/_working-images/processed/"))
  );
}

/**
 * Removes the /to-process temporary working folder after variants are created
 */
function removeProcessedImage() {
  console.log("Removing processed images");
  return del([`content/uploads/_working-images/to-process/*}`]);
}

exports.do = parallel(variants, removeProcessedImage);
