require("dotenv").config();
const gulp = require("gulp");
const awspublish = require('gulp-awspublish');
const del = require("del");
const vinylPaths = require("vinyl-paths");

// Create a new publisher using S3 options
const publisher = awspublish.create({
 //region: 'your-region-id', // Change to your AWS region
  params: {
    Bucket: 'digitalgov', // Change to your bucket name
  },
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// Define custom headers
const headers = {
  'Cache-Control': 'max-age=315360000, no-transform, public',
};

function uploadImage() {
  console.log("starting image upload");
  return gulp.src("content/uploads/_working-images/processed/*")
    .pipe(awspublish.gzip({ ext: '.gz' }))
    .pipe(publisher.publish(headers))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter())
    .pipe(vinylPaths(del));
}

function uploadFile() {
  console.log("starting file upload");
  publisher.config.params.Bucket = "digitalgov/static"; // Change to your specific static files bucket
  return gulp.src("content/uploads/_working-files/to-process/*")
    .pipe(awspublish.gzip({ ext: '.gz' }))
    .pipe(publisher.publish(headers))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter())
    .pipe(vinylPaths(del));
}

function cleanup() {
  console.log("cleanup");
  return del([
    "content/uploads/_working-images/**",
    "content/uploads/_working-files/**",
  ]);
}

exports.do = gulp.series(uploadImage, uploadFile, cleanup);
