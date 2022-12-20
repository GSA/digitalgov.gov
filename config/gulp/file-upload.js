require('dotenv').config();
const { series, src, dest } = require("gulp"),
  vinylPaths = require("vinyl-paths"),
  del = require("del"),
  s3config = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  s3 = require("gulp-s3-upload")(s3config);

function uploadStaticFile() {
  console.log("starting static file upload");
  return src("content/files/_working/to-process/*")
    .pipe(
      s3(
        {
          Bucket: "digitalgov/static", //  Required
          ACL: "public-read", //  Needs to be user-defined
        },
        {
          // S3 Constructor Options, ie:
          maxRetries: 5,
        }
      )
    )
    .pipe(vinylPaths(del))
    .pipe(dest("content/files/_working/uploaded/"));
}

function cleanup() {
  return del(["content/files/_working/**", "content/files/_inbox/*",]);
}

exports.do = series(
  uploadStaticFile, 
  cleanup
);
