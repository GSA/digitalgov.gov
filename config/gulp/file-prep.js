const { src, series } = require("gulp");
const del = require("del");
const tap = require("gulp-tap");
const sizeOf = require("image-size");
const fs = require("fs");
const path = require("path");

const imageExtensions = [".jpg", ".png", ".jpeg"];
const fileExtensions = [
  ".pdf",
  ".doc",
  ".docx",
  ".ppt",
  ".pptm",
  ".pptx",
  ".xls",
  ".xlsx",
];

const allExtensions = [...imageExtensions, ...fileExtensions];
const directoryExtensions = `{png,jpg,jpeg,JPG,JPEG,PNG,pdf,PDF,doc,DOC,docx,DOCX,ppt,PPT,pptm,PPTM,pptx,PPTX,xls,XLS,xlsx,XLSX}`;

const imageRegex = /(png|jpg|jpeg)/;
const fileRegex = /(doc|docx|pdf|ppt|pptx|pptm|xls|xlsx)/;


/**
 * 
 * original stores the new normalized name file
 * to-process copies from original for responsive image resizing, files are uploaded to s3 from this folder
 * processed contains responsive variants that are are uploaded to s3
 */
const filePaths = {
  base: "content/uploads/",
  uploads: "./content/uploads/_inbox",
  image: {
    original: "./content/uploads/_working-images/originals",
    toProcess: "./content/uploads/_working-images/to-process",
    processed: "./content/uploads/_working-images/processed",
  },
  file: {
    original: "./content/uploads/_working-files/originals",
    toProcess: "./content/uploads/_working-files/to-process",
  },
};

/**
 * Creates directories for each step of the file uploading process
 * These directories are removed when a file has been uploaded
 * @param {callback} done 
 */
function fileTidy(done) {
  var newfileName = "";
  var filetype = "";
  var paths = filePaths;

  fs.readdir(paths.uploads, (err, files) => {
    // process.stdout.write(files.length.toString() + "\n");
    for (var file of files) {
      if (allExtensions.includes(path.extname(file))) {
        newfileName = cleanFileName(file);
        filetype = fileType(file);
        createDir(paths[filetype].original, 3);
        createDir(paths[filetype].toProcess, 3);
        fs.renameSync(
          paths.uploads + "/" + file,
          paths[filetype].original + "/" + newfileName
        );
        fs.copyFileSync(
          paths[filetype].original + "/" + newfileName,
          paths[filetype].toProcess + "/" + newfileName
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



/**
 * creates the originals and to-process directories for both files and images
 * ./content/uploads/_working-images/originals";
 * ./content/uploads/_working-images/to-process";
 * @param {string} directoryPath 
 * @param {number} foldersDeep 
 */

function createDir(directoryPath, foldersDeep) {
  var dp = filePaths.base;

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
/**
 * Normalizes filename to read file-name.pdf
 * @example 
 * File Name.pdf  
 * // returns file-name.pdf
 * @param {string} origfilename 
 */
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

/**
 * removes files in content/images/_inbox directories
 * 
 */
function cleanInbox() {
  return del([
    "content/uploads/_inbox/**",
    "!content/uploads/_inbox",
    "!content/uploads/_inbox/__add jpg and png files to this folder__",
  ]);
}


/**
 * 
 * @returns date in string format 2023-01-18 14:05:46 -0400
 */
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

/**
 * Writes a yml data file with meta information about the file and how to use in a shortcode
 * Creates two versions, one for images and one for files
 */
function writeDataFile() {
  return src(`content/uploads/**/to-process/*.${directoryExtensions}`).pipe(
    tap(function foo(file) {
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
  );
}

/**
 * Returns a stringified yaml file contents for a file
 * Takes the format (.pdf, .xls, etc...) and uid which is the name of the file
 * @param {String} format 
 * @param {String} uid 
 */
function fileData(format, uid) {
  return `
  # This image is available at:
  # https://s3.amazonaws.com/digitalgov/static/${uid}.${format}
  # File shortcode: {{< asset-static file="${uid}.${format}" label="${uid} (PDF, 4 pages, 2MB)">}}
  date     :  ${get_curr_date()}
  uid      :  ${uid}
  format   :  ${format}
  `;
}


/**
 * Returns a stringified yaml file contents for a file
 * Takes the format (.png, .jpg) and uid which is the name of the file
 * @param {String} format 
 * @param {String} uid 
 * @param {Number} dimensions 
 */
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

/**
 * Checks the file extension and returns a string value of file or image
 * @param {String} extension 
 * @returns a string value of image or file
 */
function fileType(extension) {
  if (fileRegex.test(extension)) return "file";
  if (imageRegex.test(extension)) return "image";
}

/**
 * Creates the processed folder to store responsive image variants
 */
function mkdir() {
  return (
    src(
      `content/uploads/_working-images/to-process/*.{png,jpg,jpeg,JPG,JPEG,PNG}`
    )
    .pipe(
      tap(function (file) {
        var dir = "content/uploads/_working-images/processed";
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir), console.log("folder written");
        }
      })
    )
  );
}

exports.do = series(fileTidy, cleanInbox, writeDataFile, mkdir);
