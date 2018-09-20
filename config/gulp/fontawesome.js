var gulp          = require("gulp"),
    path          = require('path'),
    autoprefixer  = require("autoprefixer"),
    mqpacker      = require('css-mqpacker'),
    cssnano       = require('cssnano'),
    sourcemaps    = require('gulp-sourcemaps'),
    sass          = require("gulp-sass"),
    postcss       = require('gulp-postcss'),
    stripCssComments = require('gulp-strip-css-comments')


const FONTAWESOME_PATH = 'node_modules/@fortawesome/fontawesome-free/css/all.min.css';

// - - - - - - - - - - - - - - - - -
// Build USWDS styles

gulp.task('fontawesome', function () {
  gulp.src('node_modules/@fortawesome/fontawesome-free/css/all.min.css')
  .pipe(gulp.dest('./themes/digital.gov/static/dist/fontawesome/'));
});
