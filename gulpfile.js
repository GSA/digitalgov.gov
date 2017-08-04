var gulp          = require("gulp"),
    watch         = require('gulp-watch'),
    vinylPaths    = require('vinyl-paths'),
    replace       = require("gulp-replace-name"),
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



gulp.task("img-variants", function (done) {
  return gulp.src("static/__inbox/*.{png,jpg,jpeg}")
    .pipe(vinylPaths(del))
    .pipe(replace(/[ &$_#!?.]/g, '-'))
    .pipe(replace(/-+/g, '-'))
    .pipe(replace(/-(png|jpg|jpeg)/g, '.$1'))
    .pipe(replace(/-\./g, '.'))
    .pipe(replace(/^-/g, ''))
    .pipe(replace(/A/g, 'a'))
    .pipe(replace(/B/g, 'b'))
    .pipe(replace(/C/g, 'c'))
    .pipe(replace(/D/g, 'd'))
    .pipe(replace(/E/g, 'e'))
    .pipe(replace(/F/g, 'f'))
    .pipe(replace(/G/g, 'g'))
    .pipe(replace(/H/g, 'h'))
    .pipe(replace(/I/g, 'i'))
    .pipe(replace(/J/g, 'j'))
    .pipe(replace(/K/g, 'k'))
    .pipe(replace(/L/g, 'l'))
    .pipe(replace(/M/g, 'm'))
    .pipe(replace(/N/g, 'n'))
    .pipe(replace(/O/g, 'o'))
    .pipe(replace(/P/g, 'p'))
    .pipe(replace(/Q/g, 'q'))
    .pipe(replace(/R/g, 'r'))
    .pipe(replace(/S/g, 's'))
    .pipe(replace(/T/g, 't'))
    .pipe(replace(/U/g, 'u'))
    .pipe(replace(/V/g, 'v'))
    .pipe(replace(/W/g, 'w'))
    .pipe(replace(/X/g, 'x'))
    .pipe(replace(/Y/g, 'y'))
    .pipe(replace(/Z/g, 'z'))
    // Add the original to static/_tmp
    .pipe(gulp.dest("static/_tmp/"))
    // Create responsive variants
    .pipe(responsive({
      '*': [{
        width: 200,
        rename: {
          suffix: '__w200',
        },
      }, {
        width: 200,
        skipOnEnlargement: false,
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
        // original -> grayscale
        grayscale: true,
        rename: {
          suffix: '__gray',
        },
      }, {
        // original -> webp
        rename: {
          suffix: '',
          extname: '.webp',
        },
      }, {
        // Empty case to produce a copy of the original
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
    .pipe(gulp.dest("static/_processed/"));
});

gulp.task("upload", ["img-variants"], function (done) {
  return gulp.src("static/_processed/**/*")
    .pipe(vinylPaths(del))
    .pipe(s3({
      Bucket: 'digitalgov',   //  Required
      ACL:    'public-read'   //  Needs to be user-defined
    }, {
      // S3 Constructor Options, ie:
      maxRetries: 5
    }))
    .pipe(gulp.dest("static/_uploaded/"));
});

gulp.task("upload-cleanup", ["upload"], function (done) {
  return del(['static/_uploaded/**', '!static/_uploaded']);
});

gulp.task("proxy", ["upload-cleanup"], function (done) {
  // - - - - - - - - - - - - - - - - -
  // Create lorez version for Hugo to parse
  return gulp.src("static/_tmp/**/*")
    .pipe(vinylPaths(del))
    .pipe(responsive({
      '*': {
        rename: {
          suffix: '',
          extname: '.jpg',
        },
        grayscale: true,
        quality: 1,
        flatten: true,
        blur: true,
      },
    }, {
      // Global configuration for all images
      progressive: true,
      withMetadata: false,
      errorOnUnusedConfig: false,
      skipOnEnlargement: true,
      errorOnEnlargement: false,
      silent: true,
    }))
    .pipe(gulp.dest("static/img/proxy/"));
});

gulp.task("process-img", ["proxy"], function () {});

// - - - - - - - - - - - - - - - - -
// Watch blank becuase asset watch runs its own watch
gulp.task("watch", function () {
  gulp.watch("static/__inbox/**/*", ["process-img"])
})

// - - - - - - - - - - - - - - - - -
// Set watch as default task
gulp.task("default", ["process-img", "watch"])
