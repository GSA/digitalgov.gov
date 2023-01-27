require("dotenv").config();
const { series, src } = require("gulp"),
  vinylPaths = require("vinyl-paths"),
  del = require("del"),
  s3config = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  s3 = require("gulp-s3-upload")(s3config);

/**
 * Uploads images in /processed folder to digitalgov s3 bucket
 * TODO: Refactor both functions into one
 * https://github.com/uswds/uswds-compile/blob/223fe67c335135c55cf1be9dead44e6d363e219d/gulpfile.js#L204-L232
 */

function uploadImage() {
  console.log("starting image upload");

  return src("content/uploads/_working-images/processed/*")
    .pipe(
      s3(
        {
          Bucket: "digitalgov",
          ACL: "public-read",
        },
        {
          maxRetries: 5,
        }
      )
    )
    .pipe(vinylPaths(del));
}

/**
 * Uploads files in /to-process folder to s3 static file bucket
 * TODO: Refactor both functions into one
 */

function uploadFile() {
  console.log("starting file upload");

  return src("content/uploads/_working-files/to-process/*")
    .pipe(
      s3(
        {
          Bucket: "digitalgov/static",
          ACL: "public-read",
        },
        {
          maxRetries: 5,
        }
      )
    )
    .pipe(vinylPaths(del));
}

/**
 * Deletes working directories after uploading is complete
 * @returns nothing
 */
function cleanup() {
  return del([
    "content/uploads/_working-images/**",
    "content/uploads/_working-files/**",
  ]);
}

exports.do = series(uploadImage, uploadFile, cleanup);
