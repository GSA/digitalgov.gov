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
                skipOnEnlargement: false,
                rename: {
                  suffix: "_bu",
                  extname: ".jpg",
                },
                quality: 20,
                blur: true,
              },
              {
                width: 200,
                rename: {
                  suffix: "_w200",
                  extname: ".webp",
                },
              },
              {
                width: 200,
                grayscale: true,
                rename: {
                  suffix: "_w200bw",
                },
              },
              {
                width: 200,
                grayscale: true,
                rename: {
                  suffix: "_w200bw",
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
                width: 400,
                grayscale: true,
                rename: {
                  suffix: "_w400bw",
                },
              },
              {
                width: 400,
                grayscale: true,
                rename: {
                  suffix: "_w400bw",
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
                width: 600,
                grayscale: true,
                rename: {
                  suffix: "_w600bw",
                },
              },
              {
                width: 600,
                grayscale: true,
                rename: {
                  suffix: "_w600bw",
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
                width: 800,
                grayscale: true,
                rename: {
                  suffix: "_w800bw",
                },
              },
              {
                width: 800,
                grayscale: true,
                rename: {
                  suffix: "_w800bw",
                  extname: ".webp",
                },
              },
              {
                width: 1200,
                rename: {
                  suffix: "_w1200",
                },
              },
              {
                width: 1200,
                rename: {
                  suffix: "_w1200",
                  extname: ".webp",
                },
              },
              {
                width: 1200,
                grayscale: true,
                rename: {
                  suffix: "_w1200bw",
                },
              },
              {
                width: 1200,
                grayscale: true,
                rename: {
                  suffix: "_w1200bw",
                  extname: ".webp",
                },
              },
              {
                width: 1600,
                rename: {
                  suffix: "_w1600",
                },
              },
              {
                width: 1600,
                rename: {
                  suffix: "_w1600",
                  extname: ".webp",
                },
              },
              {
                width: 1600,
                grayscale: true,
                rename: {
                  suffix: "_w1600bw",
                },
              },
              {
                width: 1600,
                grayscale: true,
                rename: {
                  suffix: "_w1600bw",
                  extname: ".webp",
                },
              },
              {
                width: 2400,
                rename: {
                  suffix: "_w2400",
                },
              },
              {
                width: 2400,
                rename: {
                  suffix: "_w2400",
                  extname: ".webp",
                },
              },
              {
                width: 2400,
                grayscale: true,
                rename: {
                  suffix: "_w2400bw",
                },
              },
              {
                width: 2400,
                grayscale: true,
                rename: {
                  suffix: "_w2400bw",
                  extname: ".webp",
                },
              },
              {
                // original -> grayscale
                grayscale: true,
                rename: {
                  suffix: "_bw",
                },
              },
              {
                // original -> grayscale webp
                grayscale: true,
                rename: {
                  suffix: "_bw",
                  extname: ".webp",
                },
              },
              {
                // original -> webp
                rename: {
                  suffix: "",
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
  return del([
    `content/uploads/_working-images/to-process/*}`,
  ]);
}

exports.do = parallel(variants, removeProcessedImage);
