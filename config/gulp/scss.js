var gulp          = require("gulp"),
    path          = require('path'),
    autoprefixer  = require("autoprefixer"),
    mqpacker      = require('css-mqpacker'),
    cssnano       = require('cssnano'),
    sourcemaps    = require('gulp-sourcemaps'),
    sass          = require("gulp-sass"),
    postcss       = require('gulp-postcss'),
    stripCssComments = require('gulp-strip-css-comments')


const BASE = './themes/digital.gov/src/scss/base.scss';

// - - - - - - - - - - - - - - - - -
// Build USWDS styles

gulp.task('scss', function (done) {
  var plugins = [
      autoprefixer({ browsers: ['> 5%', 'Last 2 versions'], cascade: false, }),
      mqpacker({ sort: true }),
      cssnano()
  ];
  return gulp.src(BASE)
    // sourcemaps not working
    .pipe(sourcemaps.init())

    // compile css from sass
    .pipe(sass().on('error', sass.logError))

    // run postcss plugins
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./themes/digital.gov/static/dist/'));
});
