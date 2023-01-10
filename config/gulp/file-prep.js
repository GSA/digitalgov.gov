const { src, series } = require("gulp");
const del = require("del");
const tap = require("gulp-tap");
const sizeOf = require("image-size");
const fs = require("fs");
const path = require("path");

function fileStaticTidy(done) {
  const workingDirectory = "./content/images/_inbox/";
  const origDirectory = "./content/images/_working/originals";
  const toProcessDirectory = "./content/images/_working/to-process";
  const extAllowed = [".pdf", ".doc", ".docx", ".ppt", ".pptx", ".pptm", ".xls", ".xlsx"];
  var newfileName = "";

  fs.readdir(workingDirectory, (err, files) => {
    //process.stdout.write(files.length.toString() + "\n");
    for (var file of files) {
      if (extAllowed.includes(path.extname(file))) {
        //clean up the filename before processing
        //newfileName = cleanFileName(file);
        //create working directories if they do not exist
        createDir(origDirectory, 3);
        createDir(toProcessDirectory, 3);
        fs.renameSync(
          workingDirectory + "/" + file,
          origDirectory + "/" + file
        );
        fs.copyFileSync(
          origDirectory + "/" + file,
          toProcessDirectory + "/" + file
        );
      }
    }
    if (err) {
      process.output.write(
        "Error cleaning and copying file [" + file + "]\n",
        "Error message: " + err.message
      );
    }
  });
  done();
}

//create working directories if they do not exist
//./content/images/_working/originals";
//./content/images/_working/to-process";
function createDir(directoryPath, foldersDeep) {
  var dp = "content/images/";

  //if this directory does not exist, create it
  if (!fs.existsSync(directoryPath)) {
    //split directory folders
    var subdir = directoryPath.split("/").slice(foldersDeep);
    //create parent directories first
    for (let i = 0; i < subdir.length; i++) {
      for (let j = i; j <= i; j++) {
        dp = dp + subdir[j] + "/";
        console.log("i: " + i + " , j: " + j + "\n" + dp);
        //check if subfolder exists
        if (fs.existsSync(dp)) {
          continue;
        }
        // create folder
        else {
          fs.mkdirSync(dp, (err) => {
            "Error creating subdirectory [" + subdir[i] + "]\n",
              "Error message: " + err.message;
          });
        }
      }
    }
  }
}

// Clean up the filename
function cleanFileName(origfilename) {
  return origfilename
    .toLowerCase()
    .replace(/[ &$_#!?.]/g, "-")
    .replace(/-+/g, "-") // multiple dashes to a single dash
    .replace(/-(png|jpg|jpeg)/g, ".$1") // remove trailing dashes
    .replace(/\.jpeg$/g, ".jpg") // .jpeg to .jpg
    .replace(/-\d{2,4}x\d{2,4}(?=\.jpg)/g, "") // strip trailing dimensions
    .replace(/^\d{2,4}-*x-*\d{2,4}-*/g, "") // strip leading dimensions
    .replace(/-\./g, ".") // remove leading dashes
    .replace(/^-/g, "") // removes dashes from start of filename
    .toLowerCase();
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

function writeDataStaticFile() {
  return (
    src("content/images/_working/to-process/*.{pdf,doc,docx,ppt,pptm,pptx,xls,xlsx}")
      // write the .yml file for this file
      .pipe(
        tap(function foo(file) {
          var uid = file.path.match(/([^\/]+)(?=\.\w+$)/g); // gets the slug/filename from the path
          console.log("writeDataStaticFile:204", file, uid);
          var format = file.path.split(".").pop();
          var file_data = [
            "# This image is available at:",
            "# https://s3.amazonaws.com/digitalgov/static/" +
              uid +
              "." +
              format +
              "\n",
            '# File shortcode: {{< asset-static file="' + uid + '.' + format + '" label="View the slides (PDF, 5.95 MB, 52 pages)" >}}\n',
            "date     : " + get_curr_date(),
            "uid      : " + uid,
            'credit   : "" ',
            'caption  : "" ',
            'alt      : "" ',
          ].join("\n");
          fs.writeFile("data/images/" + uid + ".yml", file_data, function () {
            console.log("static file written");
          });
        })
      )
  );
}

function mkdirStaticFile() {
  return (
    src("content/images/_working/to-process/*.{pdf,doc,docx,ppt,pptm,pptx,xls,xlsx}")
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

exports.do = series(
  fileStaticTidy,
  cleanInbox,
  writeDataStaticFile,
  mkdirStaticFile
);