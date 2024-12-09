const { src, series } = require("gulp");
const sharp = require("sharp");
const tap = require("gulp-tap");
const sizeOf = require("image-size");
const fs = require("fs");
const path = require("path");

const imageExtensions = [".jpg", ".png", ".jpeg"];
const fileExtensions = [
  ".csv",
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
// removes . separator to read jpg,png,jpeg...
const extensionsString = allExtensions
  .map((extension) => extension.replace(".", ""))
  .join(",");

const imageRegex = /(png|jpg|jpeg)/;
const fileRegex = /(csv|doc|docx|pdf|ppt|pptx|pptm|xls|xlsx)/;

/**
 * Converts JPG images to PNG format
 * @param {string} imagePath - path of the image file
 */
async function convertJpgToPng(imagePath) {
  console.log(`Converting image ${imagePath} to PNG`);
  const outputPath = imagePath.replace(/\.jpe?g$/i, ".png");

  await sharp(imagePath).toFormat("png").toFile(outputPath);

  // Check if the original JPG file exists before unlinking
  if (fs.existsSync(imagePath)) {
    fs.unlinkSync(imagePath); // Remove the original JPG file
  }

  return path.basename(outputPath);
}

/**
 * Object containing working folder paths used for lifecycle steps of uploading
 * to-process contains the normalized filename, static files are upload to s3 from here
 * processed contains responsive letiants that are are uploaded to s3
 */
const filePaths = {
  base: "content/uploads/",
  uploads: "./content/uploads/_inbox",
  image: {
    toProcess: "./content/uploads/_working-images/to-process",
    processed: "./content/uploads/_working-images/processed",
  },
  file: {
    toProcess: "./content/uploads/_working-files/to-process",
  },
};

/**
 * Creates directories for each step of the file uploading process
 * These directories are removed when a file has been uploaded
 * @param {callback} done - gulp call function that is called to end the task
 */
function fileTidy(done) {
  let newfileName = "";
  let filetype = "";
  let paths = filePaths;

  fs.readdir(paths.uploads, async (err, files) => {
    if (err) {
      console.error(
        `Failed to read directory ${paths.uploads}: ${err.message}`
      );
      done(err);
      return;
    }

    for (let file of files) {
      const fileExt = path.extname(file);
      if (allExtensions.includes(fileExt)) {
        filetype = fileType(file);
        const dirToProcess = paths[filetype].toProcess;
        // create working directories if they do not exist
        createDir(paths[filetype].toProcess, 3);
        if (filetype === "image") createDir(paths[filetype].processed, 3);
        // copies uploaded file to /to-process with new normalized name
        // convert jpg to png
        if (
          (filetype === "image" && fileExt === ".jpg") ||
          fileExt === ".jpeg"
        ) {
          let convertedPng = await convertJpgToPng(
            path.join(paths.uploads, file)
          ).catch((err) => {
            console.error(
              `Error converting image ${file} to PNG: ${err.message}`
            );
            return;
          });
          // ensure the folder for the process image exists.
          if (convertedPng != file) {
            file = convertedPng;
          }
        }
        newfileName = cleanFileName(file);
        const newFilePath = path.join(dirToProcess, newfileName);

        // Rename and move the file to the new path
        try {
          console.log(
            `Moving file from ${path.join(
              paths.uploads,
              file
            )} to ${newFilePath}`
          );
          fs.renameSync(path.join(paths.uploads, file), newFilePath);
        } catch (renameError) {
          console.error(
            `Error moving file from ${path.join(
              paths.uploads,
              file
            )} to ${newFilePath}: ${renameError.message}`
          );
          continue;
        }
      }
    }
    done();
  });
}

/**
 * creates the originals and to-process directories for both files and images
 * ./content/uploads/_working-images/to-process";
 * ./content/uploads/_working-images/processed";
 * @param {string} directoryPath - path of directory to create
 * @param {number} foldersDeep - depth of directory relative to base project
 */
function createDir(directoryPath, foldersDeep) {
  let uploadsDirectory = filePaths.base;

  //if this directory does not exist, create it
  if (!fs.existsSync(directoryPath)) {
    //split directory folders
    let subdir = directoryPath.split("/").slice(foldersDeep);
    //create parent directories first
    for (let i = 0; i < subdir.length; i++) {
      for (let j = i; j <= i; j++) {
        uploadsDirectory = uploadsDirectory + subdir[j] + "/";
        //check if subfolder exists
        if (fs.existsSync(uploadsDirectory)) {
          continue;
        }
        // create folder
        else {
          fs.mkdirSync(uploadsDirectory, (err) => {
            "Error creating subdirectory [" + subdir[i] + "]\n",
              "Error message: " + err.message;
          });
        }
      }
    }
  }
}

/**
 * Checks the file extension and returns a string value of file or image
 * @param {string} extension - file name extension (.pdf, .png, etc...)
 * @returns {string} a string value of image or file
 */
function fileType(extension) {
  if (fileRegex.test(extension)) return "file";
  if (imageRegex.test(extension)) return "image";
}

/**
 * Normalizes filename by removing unnecessary characters
 * @param {string} origfilename - filename of original uploaded file
 * @example
 * File Name.pdf returns file-name.pdf
 * @returns filename in string format
 */
function cleanFileName(origfilename) {
  return origfilename
    .toLowerCase()
    .replace(/[ &$_#!?.]/g, "-")
    .replace(/-+/g, "-") // multiple dashes to a single dash
    .replace(/-(csv|png|jpg|jpeg|pdf|doc|docx|ppt|pptx|pptm|xls|xlsx)/g, ".$1") // remove trailing dashes
    .replace(/\.jpeg$/g, ".jpg") // .jpeg to .jpg
    .replace(/-\d{2,4}x\d{2,4}(?=\.jpg)/g, "") // strip trailing dimensions
    .replace(/^\d{2,4}-*x-*\d{2,4}-*/g, "") // strip leading dimensions
    .replace(/-\./g, ".") // remove leading dashes
    .replace(/^-/g, "") // removes dashes from start of filename
    .toLowerCase();
}

/**
 * removes files in content/images/_inbox directories
 * keeps _inbox/__add image or static files to this folder__
 */
function cleanInbox(done) {
  const inboxDir = `${filePaths.uploads}`;
  const filesToDelete = fs
    .readdirSync(inboxDir)
    .filter((file) => file !== "__add image or static files to this folder__");

  filesToDelete.forEach((file) => {
    const filePath = path.join(inboxDir, file);
    fs.unlinkSync(filePath);
  });
  done();
}

/**
 * Creates a timestamp for the yml file
 * @returns date in string format 2023-01-18 14:05:46 -0400
 * Date is displayed on https://digital.gov/images/
 * TODO: Refactor into more human readable format (Dec 22, 2022, ET at 04:26 PM ET)
 */
function getCurrentDate() {
  let d = new Date();
  let month = d.getMonth() + 1;
  let day = d.getDate();
  let output =
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
 * Writes a YML file with meta information and how to use in a shortcode.
 * Creates two versions: one for images or files
 * Saves YML files to data/image or data/files
 */
function writeDataFile() {
  return src(`content/uploads/**/to-process/*.{${extensionsString}}`).pipe(
    tap(function writeYMLFile(file) {
      let data;
      let uid = file.path.match(/([^\/]+)(?=\.\w+$)/g); // gets the slug/filename from the path
      let format = file.path.split(".").pop();
      let type = fileType(format);
      if (type === "image") {
        let dimensions = sizeOf(file.path);
        data = imageData(format, uid, dimensions);
      } else {
        data = fileData(format, uid);
      }
      fs.writeFile(`data/${type}s/${uid}.yml`, data, function () {
        console.log("file is written");
      });
    })
  );
}

/**
 * Returns a stringified yaml file contents for a file
 * Takes the format (.pdf, .xls, etc...) and uid which is the name of the file
 * @param {String} format - extension filetype
 * @param {String} uid - the filename
 */
function fileData(format, uid) {
  return `
  # https://s3.amazonaws.com/digitalgov/static/${uid}.${format}
  # File shortcode: {{< asset-static file="${uid}.${format}" label="${uid} (PDF, 4 pages, 2MB)" >}}
  date     :  ${getCurrentDate()}
  uid      :  ${uid}
  format   :  ${format}
  `;
}

/**
 * Returns a stringified yaml file contents for a file
 * Takes the format (.png, .jpg) and uid which is the name of the file
 * @param {String} format - extension filetype
 * @param {String} uid - the filename
 * @param {Number} dimensions - dimensions of the image
 */
function imageData(format, uid, dimensions) {
  return `
  # https://s3.amazonaws.com/digitalgov/${uid}.${format}
  # Image shortcode: {{< img src="${uid}" >}}'
  date     :  ${getCurrentDate()}
  uid      :  ${uid}
  width    :  ${dimensions.width}
  height   :  ${dimensions.height}
  format   :  ${format}

  # REQUIRED alternative text for accessibility.
  # Keep within 150 characters. https://capitalizemytitle.com/character-counter/ will count characters.
  alt      :  ""

  # Caption text appears below the image; usually the attribution for stock images.
  # Must be different from the alt text.
  caption  :  ""

  # Credit text appears after the caption text, separated by an m-dash.
  # Example https://digital.gov/2023/12/08/making-gsa-public-art-collection-more-accessible/ 
  credit   :  ""
  `;
}

exports.do = series(fileTidy, cleanInbox, writeDataFile);
