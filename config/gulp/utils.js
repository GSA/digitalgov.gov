const { src, series } = require("gulp");
const del = require("del");
const tap = require("gulp-tap");
const sizeOf = require("image-size");
const fs = require("fs");
const path = require("path");
const { Console } = require("console");


const filepaths = {
    working: "./content/images/_inbox/",
    original: "./content/images/_working/originals",
    toProcess: "./content/images/_working/to-process",
  }
  
  const imageExtensions = [".jpg", ".png", ".jpeg"];
  const fileExtensions = [".pdf", ".doc", ".docx", ".ppt", ".pptx", ".pptm", ".xls", ".xlsx"];
  

function fileTidy(done) {
    var newfileName = "";
    paths = filepaths;
    console.log(filepaths, imageExtensions, fileExtensions);
  
    fs.readdir(paths.working, (err, files) => {
      //process.stdout.write(files.length.toString() + "\n");
      for (var file of files) {
        //if file includes the allowed extensions(.jpg,.png,.jpeh), process the file
        if (imageExtensions.includes(path.extname(file))) {
          //clean up the filename before processing
          newfileName = cleanFileName(file);
          //create working directories if they do not exist
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
    return done();
  }



//   writeDataFile


exports.fileTidy = fileTidy;
// exports.test = test;
