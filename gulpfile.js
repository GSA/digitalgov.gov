var gulp          = require("gulp"),
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
    gulp.src("./static/_inbox/*/**")
        .pipe(s3({
            Bucket: 'digitalgov', //  Required
            ACL:    'public-read'       //  Needs to be user-defined
        }, {
            // S3 Constructor Options, ie:
            maxRetries: 5
        }))
    ;
});




// - - - - - - - - - - - - - - - - -
// Hash images
gulp.task("images", function () {
  // remove the current contents of the /content/aws dir
  del(["content/aws/**/*"])
  gulp.src("content/media/**/*")
    // append a hash to the filename (-NNNNN)
    .pipe(hash())
    // create a manifest of all files processed
    .pipe(hash.manifest("./data/media.json"))
    // output files to the /content/aws dir
    .pipe(gulp.dest("content/aws/"))
})

// - - - - - - - - - - - - - - - - -
// Watch asset folder for changes
gulp.task("watch", ["images"], function () {
  gulp.watch("content/media/**/*", ["images"])
})

// - - - - - - - - - - - - - - - - -
// Set watch as default task
gulp.task("default", ["watch"])
