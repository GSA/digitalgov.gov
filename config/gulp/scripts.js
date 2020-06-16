var gulp          = require("gulp"),
    uglify        = require('gulp-uglify'),
    concat        = require("gulp-concat"),
    jshint        = require("gulp-jshint")


// Javascript destinations
const uswds = require("../../node_modules/uswds-gulp/config/uswds");
const JQUERY_PATH = 'node_modules/jquery/dist/jquery.min.js';

// Project JS source directory
const PROJECT_JS_SRC = './themes/digital.gov/src/js';

// Javascript destination
const JS_DEST = './themes/digital.gov/static/dist';


gulp.task('copy-uswds-js', () => {
  return gulp.src(`${uswds}/js/**/**`)
  .pipe(gulp.dest(`${JS_DEST}`));
});

// Copy jQuery
gulp.task("copy-jquery", gulp.series('copy-uswds-js', function(done){
  return gulp.src(`${JQUERY_PATH}`)
  .pipe(gulp.dest(`${JS_DEST}`));
}));

// Compile the common JS
gulp.task("compile-common", gulp.series('copy-jquery', function(done){
  return gulp.src([
    `${PROJECT_JS_SRC}/common/**/*.js`
  ])
  .pipe(jshint())
  .pipe(jshint.reporter()) // Dump results
  .pipe(uglify())
  .pipe(concat('common.js'))
  .pipe(gulp.dest(`${JS_DEST}`));
}));


// Copy all the JS files that are not common
gulp.task("compile", gulp.series('compile-common', function(done){
  return gulp.src([
    `${PROJECT_JS_SRC}/*.js`
  ])
  .pipe(jshint())
  .pipe(jshint.reporter()) // Dump results
  .pipe(uglify())
  .pipe(gulp.dest('./themes/digital.gov/static/dist'));
}));
