var gulp          = require("gulp"),
    path          = require('path'),
    autoprefixer  = require("autoprefixer"),
    mqpacker      = require('css-mqpacker'),
    cssnano       = require('cssnano'),
    sourcemaps    = require('gulp-sourcemaps'),
    notify        = require("gulp-notify"),
    sass          = require("gulp-sass"),
    postcss       = require('gulp-postcss'),
    stripCssComments = require('gulp-strip-css-comments')


    // USWDS source directory
    const USWDS_SRC         = 'node_modules/uswds/dist';

    // Project USWDS Theme directory
    const PROJECT_USWDS_SRC = './themes/digital.gov/src/uswds';

    // Project Sass source directory
    const PROJECT_SASS_SRC  = './themes/digital.gov/src/scss';

// const USWDS_DIST = 'node_modules/uswds/dist';
// const USWDS = './themes/digital.gov/src/uswds/settings.scss';
// const USWDS_DIST_DIR = path.join(__dirname, ...USWDS_DIST.split('/'));


// - - - - - - - - - - - - - - - - -
// Build USWDS styles

gulp.task('copy-uswds-assets', () => {
  return gulp.src(`${USWDS_DIST}/@(js|fonts|img)/**/**`)
  .pipe(gulp.dest('./themes/digital.gov/static/lib/uswds'));
});

gulp.task('uswds-scss', function (done) {
  var plugins = [
      autoprefixer({ browsers: ['> 5%', 'Last 2 versions'], cascade: false, }),
      mqpacker({ sort: true }),
      cssnano()
  ];
  return gulp.src([
      `${PROJECT_SASS_SRC}/*.scss`,
      `${PROJECT_USWDS_SRC}/*.scss`,
    ])
    .pipe(sass({
        includePaths: [
          `${PROJECT_SASS_SRC}`,
          `${PROJECT_USWDS_SRC}`,
          `${USWDS_SRC}/scss`,
          `${USWDS_SRC}/scss/packages`,
        ]
      }))
    .pipe(gulp.dest(`${CSS_DEST}`))
    .pipe(postcss(plugins))
    .pipe(replace(
      /\buswds @version\b/g,
      'uswds v' + pkg.version
    ))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(`${CSS_DEST}`))
    .pipe(size())
    .pipe(gzip({ extension: 'gz' }))
    .pipe(gulp.dest(`${CSS_DEST}`))
    .pipe(size());

  // return gulp.src(USWDS)
  //   // sourcemaps not working
  //   .pipe(sourcemaps.init())
  //
  //   // compile css from sass
  //   .pipe(sass({
  //     includePaths: [
  //       path.join(USWDS_DIST_DIR, 'scss'),
  //     ]
  //   }).on('error', sass.logError))
  //
  //   // run postcss plugins
  //   .pipe(postcss(plugins))
  //   .pipe(sourcemaps.write('.'))
  //   .pipe(gulp.dest('./themes/digital.gov/static/lib/uswds/css'))
  //   .pipe(notify({
  //     "sound": "Pop" // case sensitive
  //   }));
});
