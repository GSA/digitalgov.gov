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
    s3config      = JSON.parse(fs.readFileSync('.env')),
    s3            = require('gulp-s3-upload')(s3config),
    cp            = require('child_process'),
    git           = require('gulp-git');


gulp.task("file-tidy", function (done) {
  return gulp.src("content/images/_inbox/*.{png,jpg,jpeg}")
    .pipe(replace(/[ &$_#!?.]/g, '-'))            // special chars to dashes
    .pipe(replace(/-+/g, '-'))                    // multiple dashes to a single dash
    .pipe(replace(/-(png|jpg|jpeg)/g, '.$1'))     // remove trailing dashes
    .pipe(replace(/\.jpeg$/g, '.jpg'))            // .jpeg to .jpg
    .pipe(replace(/-\d{2,4}x\d{2,4}(?=\.jpg)/g, ''))      // strip trailing dimensions
    .pipe(replace(/^\d{2,4}-*x-*\d{2,4}-*/g, ''))      // strip leading dimensions
    .pipe(replace(/-\./g, '.'))                   // remove leading dashes
    .pipe(replace(/^-/g, ''))                     // removes dashes from the start of filename
    .pipe(rename(function(path) { // make filename lowercase
      path.basename = changeCase.lowerCase(path.basename);
      path.extname = changeCase.lowerCase(path.extname);
    }))
    // Updates the original in content/images/_working/
    .pipe(gulp.dest("content/images/_working/originals/"))
    .pipe(gulp.dest("content/images/_working/to-process/"))
});

gulp.task("clean-inbox", gulp.series('file-tidy', function(done){
  return del(['content/images/_inbox/**', '!content/images/_inbox', '!content/images/_inbox/__add jpg and png files to this folder__']);
}));


function get_curr_date(){
  var d = new Date();
  var month = d.getMonth()+1;
  var day = d.getDate();
  var output = d.getFullYear() + '-' +
      (month<10 ? '0' : '') + month + '-' +
      (day<10 ? '0' : '') + day + ' ' +
      (d.getHours()<10 ? '0' : '') + d.getHours() + ":" +
      (d.getMinutes()<10 ? '0' : '') + d.getMinutes() + ":" +
      (d.getSeconds()<10 ? '0' : '') + d.getSeconds() +
      ' -0400';
  return output;
}

function get_image_uid(path){
  var uid = /([^\/]+)(?=\.\w+$)/g; // gets the slug/filename from the path
  return path.match(uid);
}

function get_image_format(path){
  var format = path.split('.').pop(); // gets the file extension from the path
  return format;
}

function get_image_data(uid, width, height, format){
  var data = [
    "date     : " + get_curr_date(),
    "uid      : " + uid,
    "width    : " + width,
    "height   : " + height,
    "format   : " + format,
    "credit   : ",
    "caption  : ",
    "alt      : "
  ].join("\n");
  return data;
}

function get_image_sq(path){
  var dimensions = sizeOf(path); // gets the file extension from the path
  var sq_dim = Math.min(dimensions.width, dimensions.height);
  return sq_dim;
}

gulp.task("img-variants", gulp.series('clean-inbox', function (done) {
  return gulp.src("content/images/_working/to-process/*.{png,jpg,jpeg,JPG,JPEG,PNG}")
    // Create responsive variants
    .pipe(tap(function (file) {
      var uid = get_image_uid(file.path);
      var format = get_image_format(file.path);
      var dimensions = sizeOf(file.path);
      fs.writeFile('data/images/'+ uid +'.yml', get_image_data(uid, dimensions.width, dimensions.height, format), function(){
        console.log('image file written');
      });
    }))
    .pipe(tap(function (file) {
      var dir = 'content/images/_working/processed';
      if (!fs.existsSync(dir)){
        fs.mkdirSync(dir), function(){
          console.log('folder written');
        };
      }
    }))
    // Create responsive variants
    .pipe(responsive({
    '*': [{
      width: 200,
      rename: {
        suffix: '_w200',
      },
    }, {
      width: 200,
      skipOnEnlargement: false,
      rename: {
        suffix: '_bu',
        extname: '.jpg',
      },
      quality: 20,
      blur: true,
    }, {
      width: 200,
      rename: {
        suffix: '_w200',
        extname: '.webp',
      },
    }, {
      width: 200,
      grayscale: true,
      rename: {
        suffix: '_w200bw',
      },
    }, {
      width: 200,
      grayscale: true,
      rename: {
        suffix: '_w200bw',
        extname: '.webp',
      },
    }, {
      width: 400,
      rename: {
        suffix: '_w400',
      },
    }, {
      width: 400,
      rename: {
        suffix: '_w400',
        extname: '.webp',
      },
    }, {
      width: 400,
      grayscale: true,
      rename: {
        suffix: '_w400bw',
      },
    }, {
      width: 400,
      grayscale: true,
      rename: {
        suffix: '_w400bw',
        extname: '.webp',
      },
    }, {
      width: 600,
      rename: {
        suffix: '_w600',
      },
    }, {
      width: 600,
      rename: {
        suffix: '_w600',
        extname: '.webp',
      },
    }, {
      width: 600,
      grayscale: true,
      rename: {
        suffix: '_w600bw',
      },
    }, {
      width: 600,
      grayscale: true,
      rename: {
        suffix: '_w600bw',
        extname: '.webp',
      },
    }, {
      width: 800,
      rename: {
        suffix: '_w800',
      },
    }, {
      width: 800,
      rename: {
        suffix: '_w800',
        extname: '.webp',
      },
    }, {
      width: 800,
      grayscale: true,
      rename: {
        suffix: '_w800bw',
      },
    }, {
      width: 800,
      grayscale: true,
      rename: {
        suffix: '_w800bw',
        extname: '.webp',
      },
    }, {
      width: 1200,
      rename: {
        suffix: '_w1200',
      },
    }, {
      width: 1200,
      rename: {
        suffix: '_w1200',
        extname: '.webp',
      },
    }, {
      width: 1200,
      grayscale: true,
      rename: {
        suffix: '_w1200bw',
      },
    }, {
      width: 1200,
      grayscale: true,
      rename: {
        suffix: '_w1200bw',
        extname: '.webp',
      },
    }, {
      width: 1600,
      rename: {
        suffix: '_w1600',
      },
    }, {
      width: 1600,
      rename: {
        suffix: '_w1600',
        extname: '.webp',
      },
    }, {
      width: 1600,
      grayscale: true,
      rename: {
        suffix: '_w1600bw',
      },
    }, {
      width: 1600,
      grayscale: true,
      rename: {
        suffix: '_w1600bw',
        extname: '.webp',
      },
    }, {
      width: 2400,
      rename: {
        suffix: '_w2400',
      },
    }, {
      width: 2400,
      rename: {
        suffix: '_w2400',
        extname: '.webp',
      },
    }, {
      width: 2400,
      grayscale: true,
      rename: {
        suffix: '_w2400bw',
      },
    }, {
      width: 2400,
      grayscale: true,
      rename: {
        suffix: '_w2400bw',
        extname: '.webp',
      },
    }, {
      // original -> grayscale
      grayscale: true,
      rename: {
        suffix: '_bw',
      },
    }, {
      // original -> grayscale webp
      grayscale: true,
      rename: {
        suffix: '_bw',
        extname: '.webp',
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
    compressionLevel: 7,
    progressive: true,
    withMetadata: false,
    errorOnUnusedConfig: false,
    skipOnEnlargement: true,
    errorOnEnlargement: false,
    silent: true,
  }))
  // .pipe(vinylPaths(del))
  .pipe(gulp.dest("content/images/_working/processed/"));
}));

gulp.task("proxy", gulp.series('img-variants', function (done) {
  // - - - - - - - - - - - - - - - - -
  // Create lorez version for Hugo to parse
  return gulp.src("content/images/_working/originals/*.{png,jpg}")
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
}));

gulp.task("upload", gulp.series('proxy', function (done) {
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

gulp.task("done", gulp.series('proxy', function (done) {
  return gulp.src("content/images/_working/originals/*")
    .pipe(gulp.dest("content/images/uploaded/"));
}));

gulp.task("cleanup", gulp.series('proxy', function (done) {
  return del(['content/images/_working/**']);
}));


// ==============================


gulp.task("git-add", gulp.series('cleanup', function (done) {
  console.log('adding...');
  return gulp.src('data/images/*')
    .pipe(git.add());
}));

gulp.task("git-commit", gulp.series('git-add', function (done) {
  console.log('commiting');
  return gulp.src('data/images/*')
    .pipe(git.commit('new images'));
}));

gulp.task("git-push", gulp.series('git-commit', function (done) {
  console.log('pushing...');
  git.push('origin', function (err) {
    if (err) throw err;
  });
}));
