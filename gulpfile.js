var gulp          = require("gulp"),
    watch         = require('gulp-watch'),
    vinylPaths    = require('vinyl-paths'),
    sass          = require("gulp-sass"),
    autoprefixer  = require("gulp-autoprefixer"),
    hash          = require("gulp-hash"),
    del           = require("del"),
    concat        = require('gulp-concat'),
    cleanCSS      = require('gulp-clean-css'),
		rename        = require('gulp-rename'),
    combineMq     = require('gulp-combine-mq'),
    strip         = require('gulp-strip-css-comments'),
    bless         = require('gulp-bless'),
    gzip          = require('gulp-gzip'),
    size          = require('gulp-size'),
    dotenv        = require('dotenv').config(),
    s3config      = {
                    accessKeyId: process.env.AWS_ACCESSKEY,
                    secretAccessKey: process.env.AWS_SECRET
                  },
    s3            = require('gulp-s3-upload')(s3config),
    cp            = require('child_process');

// - - - - - - - - - - - - - - - - -
// S3 upload

gulp.task("upload", function() {
  // remove the current contents of the /content/_done dir
  del(["static/_done/**/*"])
  gulp.src("static/__inbox/*/**")
    .pipe(gulp.dest("static/_done/"))
    .pipe(s3({
      Bucket: 'digitalgov',   //  Required
      ACL:    'public-read'   //  Needs to be user-defined
    }, {
      // S3 Constructor Options, ie:
      maxRetries: 5
    }))
  ;
});




// - - - - - - - - - - - - - - - - -
// Hash images
gulp.task("images", function () {
  return watch('static/__inbox/**/*', {
    ignoreInitial: false,
    events: ['add', 'change']
  }, function () {
    del(['static/_done/**/*']);
    gulp.src("static/__inbox/**/*")
      .pipe(vinylPaths(del))
      // append a hash to the filename (-NNNNN)
      .pipe(hash())
      // output files to the /content/aws dir
      .pipe(s3({
        Bucket: 'digitalgov',   //  Required
        ACL:    'public-read'   //  Needs to be user-defined
      }, {
        // S3 Constructor Options, ie:
        maxRetries: 5
      }))
      .pipe(gulp.dest("static/_done/"));
  });
});

// - - - - - - - - - - - - - - - - -
// Watch asset folder for changes
gulp.task("watch", function () {
  gulp.watch("static/__inbox/**/*", ["images"])
})

// - - - - - - - - - - - - - - - - -
// Set watch as default task
gulp.task("default", ["images", "watch"])
