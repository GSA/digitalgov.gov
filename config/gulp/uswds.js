var pkg           = require('../../package.json');
var autoprefixer  = require('autoprefixer');
var cssnano       = require('cssnano');
var del           = require('del');
var gulp          = require('gulp');
var gzip          = require('gulp-gzip');
var movecss       = require('css-mqpacker');
var path          = require('path');
var postcss       = require('gulp-postcss');
var rename        = require('gulp-rename');
var replace       = require('gulp-replace');
var sass          = require('gulp-sass');
var size          = require('gulp-size');
var sourcemaps    = require('gulp-sourcemaps');
var uncss         = require('postcss-uncss');
var watch         = require('gulp-watch');
var notify        = require("gulp-notify");
var gutil         = require('gulp-util');

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// LOCATIONS

// All locations are relative to the project root
// Don't use a trailing `/` for path names, use `path/to/dir`

// USWDS source directory
const USWDS_SRC         = 'node_modules/uswds/dist';

// Project Sass source directory
const PROJECT_SASS_SRC  = './themes/digital.gov/src/uswds';

// Asset (images, fonts) destination
const ASSETS_DEST       = './themes/digital.gov/static/lib/uswds';

// Asset (images, fonts) destination
const FONTS_DEST       = './themes/digital.gov/static/';

// CSS destination
const CSS_DEST          = './themes/digital.gov/static/dist';

// Build destination
const BUILD_DEST        = '_site';

// Include destination
const INC_DEST          = '_includes';

// Primary stylesheet name (exclude .css)
const STYLESHEET_BASE   = 'base';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// BUILD USWDS STYLES

gulp.task('clean-css', function () {
  return del([
    `${CSS_DEST}/**/*`
  ]);
});

gulp.task('copy-uswds-fonts', () => {
  return gulp.src(`${USWDS_SRC}/@(fonts)/**/**`)
  .pipe(gulp.dest(`${FONTS_DEST}`));
});

gulp.task('copy-uswds-assets', () => {
  return gulp.src(`${USWDS_SRC}/@(js|img)/**/**`)
  .pipe(gulp.dest(`${ASSETS_DEST}`));
});

gulp.task('build-sass', function (done) {
  var plugins = [
    autoprefixer({ browsers: ['> 1%','Last 2 versions','IE 11'], cascade: false, }),
    movecss({ sort: true }),
    cssnano({ autoprefixer: { browsers: '> 1%, Last 2 versions, IE 11' }})
  ];
  return gulp.src([
      `${PROJECT_SASS_SRC}/*.scss`
    ])
    .pipe(sourcemaps.init())
    .pipe(sass({
        includePaths: [
          `${PROJECT_SASS_SRC}`,
          `${USWDS_SRC}/scss`,
          `${USWDS_SRC}/scss/packages`,
        ]
      }))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(replace(
      /\buswds @version\b/g,
      'uswds v' + pkg.version
    ))
    .pipe(gulp.dest(`${CSS_DEST}`))
    .pipe(size())
    .pipe(notify({
      "sound": "Pop" // case sensitive
    }));

});

gulp.task('build-app', gulp.series('build-sass', function() {
  var plugins = [
    uncss({
      html: [`${BUILD_DEST}/**/*.html`],
      ignore: [/\[aria-/, /is-visible/],
    }),
    cssnano()
  ];
  return gulp.src(`${CSS_DEST}/${STYLESHEET_BASE}.min.css`)
    .pipe(postcss(plugins))
    .pipe(rename(`${STYLESHEET_BASE}.app.css`))
    .pipe(gulp.dest(`${INC_DEST}`))
    .pipe(gulp.dest(`${CSS_DEST}`))
    .pipe(size())
    .pipe(gzip({ extension: 'gz' }))
    .pipe(gulp.dest(`${CSS_DEST}`))
    .pipe(size());
}));
