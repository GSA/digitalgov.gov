var gulp          = require("gulp"),
    uglify        = require('gulp-uglify'),
    concat        = require("gulp-concat"),
    jshint        = require("gulp-jshint")

// task
gulp.task('compile', function (done) {
  return gulp.src('./themes/digital.gov/src/js/**/*.js') // path to your files
  .pipe(jshint())
  .pipe(jshint.reporter()) // Dump results
  .pipe(uglify())
  .pipe(concat('base.js'))
  .pipe(gulp.dest('./themes/digital.gov/static/dist'));
});
