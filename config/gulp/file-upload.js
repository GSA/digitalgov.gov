require("dotenv").config(); 

const gulp = require("gulp");
const awspublish = require('gulp-awspublish');
const del = require("del");
const vinylPaths = require("vinyl-paths");  

// Create a new publisher using S3 options
const publisher = awspublish.create({
  region: 'us-east-1', // Change to your AWS region
  params: {
    Bucket: 'digitalgov', // Change to your bucket name
  },
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
 
function uploadImage() {
  console.log("starting image upload");
  return gulp.src("content/uploads/_working-images/processed/*")
  .pipe(publisher.publish())  
  .pipe(awspublish.reporter({
    states: ['create', 'update', 'delete']
  }))
  .pipe(vinylPaths(del))
  .on('error', function(err) {
    console.error('Image upload failed:', err);
  });
}

function uploadFile() {
  console.log("starting file upload");
  publisher.config.params.Bucket = "digitalgov"; // Change to your specific static files bucket
  return gulp.src("content/uploads/_working-files/to-process/*")
    .pipe(publisher.publish())
    .pipe(awspublish.reporter({
      states: ['create', 'update', 'delete']
    }))
    .pipe(vinylPaths(del))
}

function cleanup() {
  console.log("cleanup");
  return del([
    "content/uploads/_working-images/**",
    "content/uploads/_working-files/**",
  ]);
}

exports.do = gulp.series(uploadImage, uploadFile, cleanup);
