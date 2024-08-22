// Import Gulp 5
const { parallel, series, src, watch } = require("gulp"); 
// Import task functions
// file tasks upload both images (png,jpg,jpeg) and static files (pdf, xls,...) to their respective s3 buckets
const file = {
  prep: require("./config/gulp/file-prep"),
  process: require("./config/gulp/file-process"),
  upload: require("./config/gulp/upload")
};
const scripts = require("./config/gulp/scripts");
const styles = require("./config/gulp/styles");

/**
 * Sets up a gulp style task to conform to the current convention
 * for uploading files to s3.
 * @param {*} cb Gulp callback function
 * @returns a completed task
 */
function uploadTask(cb) {
  return file.upload().then(() => cb()).catch(err => cb(err));
}

function watchUploads() {
  return series(file.prep.do, file.process.do, uploadTask);
}


function gulpWatch() {
  const THEME_DIR = "./themes/digital.gov/src";
  watch(`${THEME_DIR}/scss/uswds/**/*.scss`, styles.buildSass);
  watch(`${THEME_DIR}/scss/new/**/*.scss`, styles.buildSass);
  watch(`${THEME_DIR}/js/**/*.js`, scripts.compile);
  watch("./content/uploads/_inbox/*.*", watchUploads());
}

// Define public tasks
exports.copyUswdsJS = scripts.copyUswdsJS;
exports.copyUswdsImages = styles.copyUswdsImages;
exports.copyUswdsFonts = styles.copyUswdsFonts;
exports.buildSprite = styles.buildSprite;

exports.copyUswdsAssets = parallel(
  styles.copyUswdsImages,
  scripts.copyUswdsJS,
  styles.copyUswdsFonts
);
exports.buildAssets = parallel(styles.buildSass, scripts.compile);
exports.buildSass = styles.buildSass;
exports.buildJS = scripts.compile;
exports.upload = series(file.prep.do, file.process.do, uploadTask);
exports.watch = gulpWatch;
exports.default = series(styles.buildSass, gulpWatch);
