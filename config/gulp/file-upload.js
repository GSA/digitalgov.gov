const { file } = require("../../gulpfile");

require("dotenv").config();
const { series, src, dest } = require("gulp"),
  vinylPaths = require("vinyl-paths"),
  del = require("del"),
  s3config = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  s3 = require("gulp-s3-upload")(s3config);

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
    .pipe(vinylPaths(del))
    .pipe(dest("content/images/_working/uploaded/")); // probably can remove
}

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
    .pipe(vinylPaths(del))
    .pipe(dest("content/images/_working/uploaded/")); // delete?
}

function cleanup() {
  return del([
    "content/uploads/_working-images/**",
    "content/uploads/_working-files/**",
  ]);
}

exports.do = series(uploadImage, uploadFile, cleanup);
