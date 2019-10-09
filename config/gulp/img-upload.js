var gulp          = require("gulp"),
    path          = require('path'),
    gutil         = require('gulp-util'),
    watch         = require('gulp-watch'),
    vinylPaths    = require('vinyl-paths'),
    replace       = require("gulp-replace-name"),
    sass          = require("gulp-sass"),
    autoprefixer  = require("autoprefixer"),
    hash          = require("gulp-hash"),
    del           = require("del"),
    concat        = require('gulp-concat'),
    cleanCSS      = require('gulp-clean-css'),
    cssnano       = require('cssnano'),
    sourcemaps    = require('gulp-sourcemaps'),
    postcss       = require('gulp-postcss'),
    mqpacker      = require('css-mqpacker'),
    combineMq     = require('gulp-combine-mq'),
    strip         = require('gulp-strip-css-comments'),
    bless         = require('gulp-bless'),
    gzip          = require('gulp-gzip'),
    size          = require('gulp-size'),
    changeCase    = require('change-case'),
    responsive    = require('gulp-responsive'),
    tap           = require('gulp-tap'),
    rename        = require("gulp-rename"),
    fs            = require('graceful-fs'),
    sizeOf        = require('image-size'),
    dotenv        = require('dotenv').config(),
    s3config      = {
                    accessKeyId: process.env.AWS_ACCESSKEY,
                    secretAccessKey: process.env.AWS_SECRET
                  },
    s3            = require('gulp-s3-upload')(s3config),
    cp            = require('child_process');


gulp.task("upload", gulp.series(gulp.parallel('img-variants', 'img-proxy'), function (done) {
  console.log('starting upload');
  return gulp.src("content/images/_working/processed/**/*")
    .pipe(s3({
      Bucket: 'digitalgov',   //  Required
      ACL:    'public-read'   //  Needs to be user-defined
    }, {
      // S3 Constructor Options, ie:
      maxRetries: 5
    }))

    .pipe(vinylPaths(del))
    .pipe(gulp.dest("content/images/_working/uploaded/"));
}));

gulp.task("done", gulp.series('upload', function (done) {
  return gulp.src("content/images/_working/originals/*")
    .pipe(gulp.dest("content/images/uploaded/"));
}));

gulp.task("cleanup", gulp.series('done', function (done) {
  return del(['content/images/_working/**']);
}));
