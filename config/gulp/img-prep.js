const { src, dest, series } = require("gulp");
const replace = require("gulp-replace-name");
const rename = require("gulp-rename");
const changeCase = require("change-case");
const del = require("del");
const tap = require("gulp-tap");
const sizeOf = require("image-size");
const fs = require("fs");

// Clean up the filename before processing
function fileTidy() {
  return (
    src("content/images/_inbox/*.{png,jpg,jpeg}")
      .pipe(replace(/[ &$_#!?.]/g, "-")) // special chars to dashes
      .pipe(replace(/-+/g, "-")) // multiple dashes to a single dash
      .pipe(replace(/-(png|jpg|jpeg)/g, ".$1")) // remove trailing dashes
      .pipe(replace(/\.jpeg$/g, ".jpg")) // .jpeg to .jpg
      .pipe(replace(/-\d{2,4}x\d{2,4}(?=\.jpg)/g, "")) // strip trailing dimensions
      .pipe(replace(/^\d{2,4}-*x-*\d{2,4}-*/g, "")) // strip leading dimensions
      .pipe(replace(/-\./g, ".")) // remove leading dashes
      .pipe(replace(/^-/g, "")) // removes dashes from start of filename

      // make filename lowercase
      .pipe(
        rename(function (path) {
          path.basename = changeCase.lowerCase(path.basename);
          path.extname = changeCase.lowerCase(path.extname);
        })
      )

      // copies the original to content/images/_working/
      .pipe(dest("content/images/_working/originals/"))
      .pipe(dest("content/images/_working/to-process/"))
  );
}

function cleanInbox() {
  return del([
    "content/images/_inbox/**",
    "!content/images/_inbox",
    "!content/images/_inbox/__add jpg and png files to this folder__",
  ]);
}

function get_curr_date() {
  var d = new Date();
  var month = d.getMonth() + 1;
  var day = d.getDate();
  var output =
    d.getFullYear() +
    "-" +
    (month < 10 ? "0" : "") +
    month +
    "-" +
    (day < 10 ? "0" : "") +
    day +
    " " +
    (d.getHours() < 10 ? "0" : "") +
    d.getHours() +
    ":" +
    (d.getMinutes() < 10 ? "0" : "") +
    d.getMinutes() +
    ":" +
    (d.getSeconds() < 10 ? "0" : "") +
    d.getSeconds() +
    " -0400";
  return output;
}

function writeDataFile() {
  return (
    src("content/images/_working/to-process/*.{png,jpg,jpeg,JPG,JPEG,PNG}")
      // write the .yml file for this image
      .pipe(
        tap(function foo(file) {
          var uid = file.path.match(/([^\/]+)(?=\.\w+$)/g); // gets the slug/filename from the path
          var format = file.path.split(".").pop();
          var dimensions = sizeOf(file.path);
          var img_data = [
            "# This image is available at:",
            "# https://s3.amazonaws.com/digitalgov/" +
              uid +
              "." +
              format +
              "\n",
            '# Image shortcode: {{< img src="' + uid + '" >}}\n',
            "date     : " + get_curr_date(),
            "uid      : " + uid,
            "width    : " + dimensions.width,
            "height   : " + dimensions.height,
            "format   : " + format,
            'credit   : "" ',
            'caption  : "" ',
            'alt      : "" ',
          ].join("\n");
          fs.writeFile("data/images/" + uid + ".yml", img_data, function () {
            console.log("image file written");
          });
        })
      )
  );
}

function mkdir() {
  return (
    src("content/images/_working/to-process/*.{png,jpg,jpeg,JPG,JPEG,PNG}")
      // Create the processed folder
      .pipe(
        tap(function (file) {
          var dir = "content/images/_working/processed";
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir), console.log("folder written");
          }
        })
      )
  );
}

exports.do = series(fileTidy, cleanInbox, writeDataFile, mkdir);
