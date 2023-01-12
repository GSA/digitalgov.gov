const { file } = require('../../gulpfile');

require('dotenv').config();
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

  return src("content/images/_working/processed/**/*")
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
    .pipe(dest("content/images/_working/uploaded/"));
}

function uploadFile() {
  console.log("starting file upload");

  return src("./content/images/_working/to-process/*")
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

exports.do = series(
  uploadImage,
  uploadFile, 
  done, 
  cleanup
);