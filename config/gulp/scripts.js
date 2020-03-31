var gulp          = require("gulp"),
    uglify        = require('gulp-uglify'),
    concat        = require("gulp-concat"),
    jshint        = require("gulp-jshint")


// Javascript destination
const JS_SRC = './themes/digital.gov/src/js';

// task
gulp.task('compile-common', function (done) {
  return gulp.src([
    `${JS_SRC}/common/**/*.js`
  ])

  .pipe(jshint())
  .pipe(jshint.reporter()) // Dump results
  .pipe(uglify())
  .pipe(concat('common.js'))
  .pipe(gulp.dest('./themes/digital.gov/static/dist'));
});

const JQUERY_PATH = 'node_modules/jquery/dist/jquery.min.js';

// Copy all the JS files that are not common
gulp.task('compile', function(done) {
  return gulp.src([
    `${JS_SRC}/*.js`
  ])
  .pipe(jshint())
  .pipe(jshint.reporter()) // Dump results
  .pipe(uglify())
  .pipe(gulp.dest('./themes/digital.gov/static/dist'));
});

// Copy jQuery
gulp.task('copy-jquery', () => {
  return gulp.src(`${JQUERY_PATH}`)
  .pipe(gulp.dest('./themes/digital.gov/static/dist'));
});
