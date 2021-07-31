// Import Gulp 4
const { parallel, series, src, watch } = require("gulp");

// Import task functions
const fa = require("./config/gulp/fontawesome"),
  img = {
    prep: require("./config/gulp/img-prep"),
    process: require("./config/gulp/img-process"),
    upload: require("./config/gulp/img-upload"),
  },
  scripts = require("./config/gulp/scripts"),
  styles = require("./config/gulp/styles");

function gulpWatch() {
  const THEME_DIR = "./themes/digital.gov/src";
  watch(`${THEME_DIR}/scss/uswds/**/*.scss`, styles.buildSass);
  watch(`${THEME_DIR}/scss/new/**/*.scss`, styles.buildSass);
  watch(`${THEME_DIR}/js/**/*.js`, scripts.compile);
  watch("./content/images/_inbox/*.*", img);
}

// Define public tasks
exports.buildAssets = parallel(styles.buildSass, scripts.compile);
exports.img = series(img.prep.do, img.process.do, img.upload.do);
exports.watch = gulpWatch;
exports.default = series(styles.buildSass, gulpWatch);
