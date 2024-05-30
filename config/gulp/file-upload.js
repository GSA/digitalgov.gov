require("dotenv").config();

const gulp = require("gulp");
const awspublish = require("gulp-awspublish");
const rename = require("gulp-rename");
const del = require("del");
const vinylPaths = require("vinyl-paths");

// Create a new publisher using S3 options
const publisher = awspublish.create({
  region: "us-east-1", // Change to your AWS region
  params: {
    Bucket: "digitalgov", // Change to your bucket name
  },
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

function uploadImage() {
  return gulp
    .src("content/uploads/_working-images/processed/*")
    .pipe(publisher.publish())
    .pipe(
      awspublish.reporter({
        states: ["create", "update", "delete"],
      })
    )
    .pipe(vinylPaths(del))
    .on("error", function (err) {
      console.error("Image upload failed:", err);
    });
}

function uploadFile() {
  // renames file to /static/filename to upload to digitalgov/static directory
  const staticRename = rename((path) => {
    path.basename = `/static/${path.basename}`;
  });

  return gulp
    .src("content/uploads/_working-files/to-process/*")
    .pipe(staticRename)
    .pipe(publisher.publish())
    .pipe(
      awspublish.reporter({
        states: ["create", "update", "delete"],
      })
    )
    .pipe(vinylPaths(del))
    .on("error", function (err) {
      console.error("File upload failed:", err);
    });
}

function cleanup() {
  console.log("cleanup");
  return del([
    "content/uploads/_working-images",
    "content/uploads/_working-files",
  ]);
}

exports.do = gulp.series(uploadImage, uploadFile, cleanup);
