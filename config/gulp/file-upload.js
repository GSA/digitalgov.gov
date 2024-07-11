require("dotenv").config();

const gulp = require("gulp");
const awspublish = require("gulp-awspublish");
const rename = require("gulp-rename");
const del = require("del");
const vinylPaths = require("vinyl-paths");
const fs = require("fs");
const { resolve } = require("path");
// Create a new publisher using S3 options
const publisher = awspublish.create({
  region: "us-east-1", // Change to your AWS region
  params: {
    Bucket: "digitalgov", // Change to your bucket name
  },
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const headers = {
  "Cache-Control": "max-age=315360000, no-transform, public",
  'x-amz-acl': 'public-read'
}

function uploadImage() {
  return gulp
    .src("content/uploads/_working-images/processed/*", { 
      encoding: false,
    })
    .pipe(publisher.publish(headers))
    .pipe(
      awspublish.reporter({
        states: ["create", "update", "delete"],
      })
    )
    .pipe(vinylPaths(del))
    .on("error", function (err) {
      console.error("Image upload failed:", err);
    });
}

function uploadFile() {
  // renames file to /static/filename to upload to digitalgov/static directory
  const staticRename = rename((path) => {
    path.basename = `/static/${path.basename}`;
  });

  return gulp
    .src("content/uploads/_working-files/to-process/*", { 
      removeBOM: true, 
    })
    .pipe(staticRename)
    .pipe(publisher.publish(headers))
    .pipe(
      awspublish.reporter({
        states: ["create", "update", "delete"],
      })
    )
    .pipe(vinylPaths(del))
    .on("error", function (err) {
      console.error("File upload failed:", err);
    });
}

function cleanup() {
  return new Promise((resolve, reject) => {
    let imageDir = "content/uploads/_working-images/processed";
    let fileDir = "content/uploads/_working-files/to-process";

    if (fs.existsSync(imageDir)) {
      if (fs.readdirSync(imageDir).length > 0) {
        console.log(`Images have number of files ${fs.readdirSync(imageDir).length}`);
        // delete tht folder
        del([imageDir]);
        resolve();
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

/**
 * Determines which files to upload and initiates the upload process.
 * @param {Function} done - A callback function to signal that the task is complete.
 * 
 * Key Points:
 * 1. The function checks if there are images and files to upload.
 * 2. If there are images, it initiates the upload process.
 * 3. If there are files, it initiates the upload process.
 * 4. The function keeps track of the number of uploads that need to be completed.
 * 5. After all uploads are complete, the `done` callback is called to signal the task is complete.
 */
function determineWhichToUpload() {
  return new Promise((resolve, reject) => {
    const imageDir = "content/uploads/_working-images/processed/";
    const fileDir = "content/uploads/_working-files/to-process/";
    let imageDirExists = fs.existsSync(imageDir);
    let fileDirExists = fs.existsSync(fileDir);
    let imageFiles = imageDirExists ? fs.readdirSync(imageDir) : [];
    let fileFiles = fileDirExists ? fs.readdirSync(fileDir) : [];

    if (!imageDirExists && !fileDirExists) {
      console.log("No files or images to upload.");
      return resolve();
    }

    let uploadsToComplete = 0;
    let uploadsCompleted = 0;

    const checkCompletion = () => {
      if (uploadsCompleted === uploadsToComplete) {
        resolve();
      }
    };

    if (imageFiles.length > 0) {
      uploadsToComplete += 1;
      uploadImage(); 
      uploadsCompleted += 1;
      checkCompletion();
    }

    if (fileFiles.length > 0) {
      uploadsToComplete += 1;
      uploadFile();
      uploadsCompleted += 1;
      checkCompletion();
    }

  return resolve();
  });
}



/**
 * Exports a Gulp task series that first determines which files to upload and then cleans up.
 */
exports.do = gulp.series(determineWhichToUpload, cleanup);