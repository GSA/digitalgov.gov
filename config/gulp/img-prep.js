var gulp          = require("gulp");
var replace       = require("gulp-replace-name");
var rename        = require("gulp-rename");
var changeCase    = require('change-case');
var del           = require("del");
var tap           = require('gulp-tap');
var sizeOf        = require('image-size');
var fs            = require('graceful-fs');



// Clean up the filename before processing
gulp.task("file-tidy", gulp.series(function(done){
  return gulp.src("content/images/_inbox/*.{png,jpg,jpeg}")
    .pipe(replace(/[ &$_#!?.]/g, '-'))                 // special chars to dashes
    .pipe(replace(/-+/g, '-'))                         // multiple dashes to a single dash
    .pipe(replace(/-(png|jpg|jpeg)/g, '.$1'))          // remove trailing dashes
    .pipe(replace(/\.jpeg$/g, '.jpg'))                 // .jpeg to .jpg
    .pipe(replace(/-\d{2,4}x\d{2,4}(?=\.jpg)/g, ''))   // strip trailing dimensions
    .pipe(replace(/^\d{2,4}-*x-*\d{2,4}-*/g, ''))      // strip leading dimensions
    .pipe(replace(/-\./g, '.'))                        // remove leading dashes
    .pipe(replace(/^-/g, ''))                          // removes dashes from start of filename

    // make filename lowercase
    .pipe(rename(function(path) {
      path.basename = changeCase.lowerCase(path.basename);
      path.extname = changeCase.lowerCase(path.extname);
    }))

    // copies the original to content/images/_working/
    .pipe(gulp.dest("content/images/_working/originals/"))
    .pipe(gulp.dest("content/images/_working/to-process/"))
}));

// removes the original from content/images/_inbox/
gulp.task("clean-inbox", gulp.series('file-tidy', function(){
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

gulp.task("write-data-file", gulp.series('clean-inbox', function (done) {
  return gulp.src("content/images/_working/to-process/*.{png,jpg,jpeg,JPG,JPEG,PNG}")
    // write the .yml file for this image
    .pipe(tap(function (file) {
      var uid = file.path.match(/([^\/]+)(?=\.\w+$)/g); // gets the slug/filename from the path
      var format = file.path.split('.').pop();
      var dimensions = sizeOf(file.path);
      var img_data = [
        "date     : " + get_curr_date(),
        "uid      : " + uid,
        "width    : " + dimensions.width,
        "height   : " + dimensions.height,
        "format   : " + format,
        "credit   : ",
        "caption  : ",
        "alt      : "
      ].join("\n");
      fs.writeFile('data/images/'+ uid +'.yml', img_data, function(){
        console.log('image file written');
      });
    }))
}));

gulp.task("mkdir", gulp.series('write-data-file', function (done) {
  return gulp.src("content/images/_working/to-process/*.{png,jpg,jpeg,JPG,JPEG,PNG}")
    // Create the processed folder
    .pipe(tap(function (file) {
      var dir = 'content/images/_working/processed';
      if (!fs.existsSync(dir)){
        fs.mkdirSync(dir), function(){
          console.log('folder written');
        };
      }
    }))
}));

gulp.task("img-variants", gulp.series('mkdir', function (done) {
  return gulp.src("content/images/_working/to-process/*.{png,jpg,jpeg,JPG,JPEG,PNG}")
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

gulp.task("img-proxy", gulp.series('mkdir', function (done) {
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
    .pipe(gulp.dest("static/img/proxy/"));
}));

gulp.task("upload", gulp.series(gulp.parallel('img-variants', 'img-proxy'), function (done) {
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


// ==============================


gulp.task("git-add", gulp.series('cleanup', function (done) {
  console.log('adding');
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
