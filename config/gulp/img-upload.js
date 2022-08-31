require('dotenv').config();
const { series, src, dest } = require("gulp"),
  vinylPaths = require("vinyl-paths"),
  del = require("del"),
  s3config = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  s3 = require("gulp-s3-upload")(s3config);

function upload() {
  console.log("starting upload");
  return src("content/images/_working/processed/**/*")
    .pipe(
      s3(
        {
          Bucket: "digitalgov", //  Required
          ACL: "public-read", //  Needs to be user-defined
        },
        {
          // S3 Constructor Options, ie:
          maxRetries: 5,
        }
      )
    )
    .pipe(vinylPaths(del))
    .pipe(dest("content/images/_working/uploaded/"));
}

function done() {
  return src("content/images/_working/originals/*").pipe(
    dest("content/images/uploaded/")
  );
}

function cleanup() {
  return del(["content/images/_working/**"]);
}

exports.do = series(upload, done, cleanup);
