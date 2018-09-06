var gulp          = require("gulp"),
    path          = require('path'),
    autoprefixer  = require("autoprefixer"),
    mqpacker      = require('css-mqpacker'),
    cssnano       = require('cssnano'),
    sourcemaps    = require('gulp-sourcemaps'),
    sass          = require("gulp-sass"),
    postcss       = require('gulp-postcss')


const USWDS_DIST = 'node_modules/uswds/dist';
const USWDS_DIST_DIR = path.join(__dirname, ...USWDS_DIST.split('/'));


// - - - - - - - - - - - - - - - - -
// Build USWDS styles

gulp.task('copy-uswds-assets', () => {
  return gulp.src(`${USWDS_DIST}/@(js|fonts|img)/**/**`)
  .pipe(gulp.dest('./themes/digital.gov/static/lib/uswds'));
});

gulp.task('sass', function (done) {
  var plugins = [
      autoprefixer({ browsers: ['> 5%', 'Last 2 versions'], cascade: false, }),
      mqpacker({ sort: true }),
      cssnano()
  ];
  return gulp.src('./themes/digital.gov/src/scss/uswds.scss')
    // sourcemaps not working
    .pipe(sourcemaps.init())

    // compile css from sass
    .pipe(sass({
      includePaths: [
        path.join(USWDS_DIST_DIR, 'scss'),
      ]
    }).on('error', sass.logError))

    // run postcss plugins
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./themes/digital.gov/static/lib/uswds/css'));
});

// - - - - - - - - - - - - - - - - -
gulp.task("watch", function () {
  gulp.watch('./themes/digital.gov/src/sass/**/*.scss', ['sass']);
})


// - - - - - - - - - - - - - - - - -
// Set watch as default task
gulp.task('default', ['watch', 'sass', 'copy-uswds-assets']);
