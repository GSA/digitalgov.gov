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
