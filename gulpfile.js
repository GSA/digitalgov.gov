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
    // Create responsive variants
    gulp.task("create-variants", function (done) {
      del(['static/_uploaded/**/*']);
      return gulp.src("static/__inbox/**/*")
        .pipe(vinylPaths(del))
        // Add the original to static/img
        .pipe(gulp.dest("static/img/"))
        // Create responsive variants
        .pipe(responsive({
          '*': [{
            width: 200,
            rename: {
              suffix: '__w200',
            },
          }, {
            width: 200,
            rename: {
              suffix: '__bu',
              extname: '.jpg',
            },
            quality: 20,
            blur: true,
          }, {
            width: 200,
            rename: {
              suffix: '__w200',
              extname: '.webp',
            },
          }, {
            width: 200,
            grayscale: true,
            rename: {
              suffix: '__gray__w200',
            },
          }, {
            width: 400,
            rename: {
              suffix: '__w400',
            },
          }, {
            width: 400,
            rename: {
              suffix: '__w400',
              extname: '.webp',
            },
          }, {
            width: 400,
            grayscale: true,
            rename: {
              suffix: '__gray__w400',
            },
          }, {
            width: 600,
            rename: {
              suffix: '__w600',
            },
          }, {
            width: 600,
            rename: {
              suffix: '__w600',
              extname: '.webp',
            },
          }, {
            width: 600,
            grayscale: true,
            rename: {
              suffix: '__gray__w600',
            },
          }, {
            width: 800,
            rename: {
              suffix: '__w800',
            },
          }, {
            width: 800,
            rename: {
              suffix: '__w800',
              extname: '.webp',
            },
          }, {
            width: 800,
            grayscale: true,
            rename: {
              suffix: '__gray__w800',
            },
          }, {
            width: 1200,
            rename: {
              suffix: '__w1200',
            },
          }, {
            width: 1200,
            rename: {
              suffix: '__w1200',
              extname: '.webp',
            },
          }, {
            width: 1200,
            grayscale: true,
            rename: {
              suffix: '__gray__w1200',
            },
          }, {
            width: 1600,
            rename: {
              suffix: '__w1600',
            },
          }, {
            width: 1600,
            rename: {
              suffix: '__w1600',
              extname: '.webp',
            },
          }, {
            width: 1600,
            grayscale: true,
            rename: {
              suffix: '__gray__w1600',
            },
          }, {
            width: 2400,
            rename: {
              suffix: '__w2400',
            },
          }, {
            width: 2400,
            rename: {
              suffix: '__w2400',
              extname: '.webp',
            },
          }, {
            width: 2400,
            grayscale: true,
            rename: {
              suffix: '__gray__w2400',
            },
          }, {
            // This blank entry makes a copy of the original image
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
        }))
        .pipe(gulp.dest("static/tmp/"));
    });

// - - - - - - - - - - - - - - - - -
// Upload images
gulp.task("upload", ["create-variants"], function (done) {
  return gulp.src("static/tmp/**/*")
    // output files to the /content/aws dir
    .pipe(s3({
      Bucket: 'digitalgov',   //  Required
      ACL:    'public-read'   //  Needs to be user-defined
    }, {
      // S3 Constructor Options, ie:
      maxRetries: 5
    }));
  del(['static/tmp/**']);
});

// - - - - - - - - - - - - - - - - -
// Upload images
gulp.task("clean", ["upload"], function (done) {
  return del(['static/tmp/**']);
});

// - - - - - - - - - - - - - - - - -
// Process images
gulp.task("watch-img", ["clean"], function (done) {
  return watch('static/__inbox/**/*', {
    ignoreInitial: false,
    events: ['add', 'change']
  });
});




// - - - - - - - - - - - - - - - - -
// Watch asset folder for changes
gulp.task("watch", function () {
  gulp.watch("static/__inbox/**/*", ["watch-img"])
})

// - - - - - - - - - - - - - - - - -
// Set watch as default task
gulp.task("default", ["watch-img", "watch"])
