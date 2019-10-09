var gulp          = require("gulp");
var vinylPaths    = require('vinyl-paths');
var del           = require("del");
var s3config      = {
                      accessKeyId: process.env.AWS_ACCESSKEY,
                      secretAccessKey: process.env.AWS_SECRET
                    },
    s3            = require('gulp-s3-upload')(s3config);


gulp.task("upload", gulp.series(function (done) {
  return gulp.src("content/images/_working/processed/**/*")
    .pipe(s3({
      Bucket: 'digitalgov',   //  Required
      ACL:    'public-read'   //  Needs to be user-defined
    }, {
      // S3 Constructor Options, ie:
      maxRetries: 5
    }))

    .pipe(vinylPaths(del))
    .pipe(gulp.dest("content/images/_working/uploaded/"));
}));

gulp.task("done", gulp.series('upload', function (done) {
  return gulp.src("content/images/_working/originals/*")
    .pipe(gulp.dest("content/images/uploaded/"));
}));

gulp.task("cleanup", gulp.series('done', function (done) {
  return del(['content/images/_working/**']);
}));
