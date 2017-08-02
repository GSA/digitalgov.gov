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
    responsive    = require('gulp-responsive'),
    dotenv        = require('dotenv').config(),
    s3config      = {
                    accessKeyId: process.env.AWS_ACCESSKEY,
                    secretAccessKey: process.env.AWS_SECRET
                  },
    s3            = require('gulp-s3-upload')(s3config),
    cp            = require('child_process');


// - - - - - - - - - - - - - - - - -
// Process and upload images
gulp.task("images", function () {
  return watch('static/__inbox/**/*', {
    ignoreInitial: false,
    events: ['add', 'change']
  }, function () {
    del(['static/_done/**/*']);
    gulp.src("static/__inbox/**/*")
      .pipe(vinylPaths(del))
/*
          // append a hash to the filename (-NNNNN)
          .pipe(hash())
*/
      .pipe(gulp.dest("static/_done/"))
      .pipe(responsive({
        '*': [{
          // image-xs.jpg is 200 pixels wide
          width: 200,
          rename: {
            suffix: '__w200',
            extname: '.jpg',
          },
        }, {
          // image-400w.jpg is 400 pixels wide
          width: 400,
          rename: {
            suffix: '__w400',
            extname: '.jpg',
          },
        }, {
          // image-600w.jpg is 800 pixels wide
          width: 600,
          rename: {
            suffix: '__w600',
            extname: '.jpg',
          },
        }, {
          // image-md.jpg is 600 pixels wide
          width: 800,
          rename: {
            suffix: '__w800',
            extname: '.jpg',
          },
        }, {
          // image-1200w.jpg is 1200 pixels wide
          width: 1200,
          rename: {
            suffix: '__w1200',
            extname: '.jpg',
          },
        }, {
          // image-1600w.jpg is 600 pixels wide
          width: 1600,
          rename: {
            suffix: '__w1600',
            extname: '.jpg',
          },
        }, {
          // image-2400w.jpg is 1200 pixels wide
          width: 2400,
          rename: {
            suffix: '__w2400',
            extname: '.jpg',
          },
  //        }, {
  //          // image-max.jpg is original width
  //          rename: {
  //            suffix: '-max',
  //            extname: '.jpg',
  //          },
        }],
      }, {
        // Global configuration for all images
        quality: 80,
        progressive: true,
        withMetadata: false,
        errorOnUnusedConfig: false,
        skipOnEnlargement: true,
        errorOnEnlargement: false,
        silent: true,
  //        flatten: true,
  //        background: "#fff",
      }))
      .pipe(gulp.dest("static/_done/"))
      // output files to the /content/aws dir
      .pipe(s3({
        Bucket: 'digitalgov',   //  Required
        ACL:    'public-read'   //  Needs to be user-defined
      }, {
        // S3 Constructor Options, ie:
        maxRetries: 5
      }));
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
