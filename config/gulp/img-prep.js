const { src, series } = require("gulp");
const del = require("del");
const tap = require("gulp-tap");
const sizeOf = require("image-size");
const fs = require("fs");
const path = require("path");

const filepaths = {
  working: "./content/images/_inbox/",
  original: "./content/images/_working/originals",
  toProcess: "./content/images/_working/to-process",
}

const imageExtensions = [".jpg", ".png", ".jpeg"];
const fileExtensions = [".pdf", ".doc", ".docx", ".ppt", ".pptm", ".pptx", ".xls", ".xlsx"];
const allExtensions = [...imageExtensions, ...fileExtensions];
const directoryExtensions = `{png,jpg,jpeg,JPG,JPEG,PNG,pdf,PDF,doc,DOC,docx,DOCX,ppt,PPT,pptm,PPTM,pptx,PPTX,xls,XLS,xlsx,XLSX}`;

const imageRegex = /(png|jpg|jpeg)/;
const fileRegex = /(doc|docx|pdf|ppt|pptx|pptm|xls|xlsx)/;

function fileTidy(done) {
  var newfileName = "";
  paths = filepaths;

  fs.readdir(paths.working, (err, files) => {
    // process.stdout.write(files.length.toString() + "\n");
    for (var file of files) {
      if (allExtensions.includes(path.extname(file))) {
        newfileName = cleanFileName(file);
        createDir(paths.original, 3);
        createDir(paths.toProcess, 3);
        fs.renameSync(
          paths.working + "/" + file,
          paths.original + "/" + newfileName
        );
        fs.copyFileSync(
          paths.original + "/" + newfileName,
          paths.toProcess + "/" + newfileName
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
    .replace(/-(png|jpg|jpeg|pdf|doc|docx|ppt|pptx|pptm|xls|xlsx)/g, ".$1") // remove trailing dashes
    .replace(/\.jpeg$/g, ".jpg") // .jpeg to .jpg
    .replace(/-\d{2,4}x\d{2,4}(?=\.jpg)/g, "") // strip trailing dimensions
    .replace(/^\d{2,4}-*x-*\d{2,4}-*/g, "") // strip leading dimensions
    .replace(/-\./g, ".") // remove leading dashes
    .replace(/^-/g, "") // removes dashes from start of filename
    .toLowerCase();
}

// removes files in content/images/_inbox directories
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

// write the yml file
function writeDataFile() {
  return (
    src(`content/images/_working/to-process/*.${directoryExtensions}`)
      .pipe(
        tap(function foo(file) {
          console.log("filepath:137", file.path);
          var uid = file.path.match(/([^\/]+)(?=\.\w+$)/g); // gets the slug/filename from the path
          var format = file.path.split(".").pop();
          var type = fileType(format);
          if (type === "image") {
            var dimensions = sizeOf(file.path);
            var data = imageData(format, uid, dimensions);
          } else {
            var data = fileData(format, uid);
          }
          fs.writeFile("data/images/" + uid + ".yml", data, function () {
            console.log("file is written");
          });
        })
      )
  );
}

function fileData(format, uid) {
  return `
  # This image is available at:
  # https://s3.amazonaws.com/digitalgov/static/${uid}.${format}
  # Image shortcode: {{< asset-static file="${uid}.${format}" >}}
  date     :  ${get_curr_date()}
  uid      :  ${uid}
  format   :  ${format}
  `;
}

function imageData(format, uid, dimensions) {
  return `
  # This image is available at:
  # https://s3.amazonaws.com/digitalgov/${uid}.${format}
  # Image shortcode: {{< img src=${uid} >}}'
  date     :  ${get_curr_date()}
  uid      :  ${uid}
  width    :  ${dimensions.width}
  height   :  ${dimensions.height}
  format   :  ${format}
  credit   :  
  caption  :  
  alt      :
  `;
}

// check file type
function fileType(extension) {
  if (fileRegex.test(extension)) return "file";
  if (imageRegex.test(extension)) return "image";
}

// create directories for processed images
function mkdir() {
  return (
    src(`content/images/_working/to-process/*.${directoryExtensions}`)
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
  fileTidy,
  cleanInbox,
  writeDataFile,
  mkdir
);