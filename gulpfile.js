// Import Gulp 4
const { parallel, series, src, watch } = require("gulp");

// Import task functions
const img = {
    prep: require("./config/gulp/img-prep"),
    process: require("./config/gulp/img-process"),
    upload: require("./config/gulp/img-upload"),
  },
  scripts = require("./config/gulp/scripts"),
  styles = require("./config/gulp/styles");

function watchImages() {
  return series(img.prep.do, img.process.do, img.upload.do);
}

function gulpWatch() {
  const THEME_DIR = "./themes/digital.gov/src";
  watch(`${THEME_DIR}/scss/uswds/**/*.scss`, styles.buildSass);
  watch(`${THEME_DIR}/scss/new/**/*.scss`, styles.buildSass);
  watch(`${THEME_DIR}/js/**/*.js`, scripts.compile);
  watch("./content/images/_inbox/*.*", watchImages());
}

// Define public tasks
exports.copyUswdsImages = styles.copyUswdsImages;
exports.copyUswdsJs = styles.copyUswdsJs;
exports.copyUswdsFonts = styles.copyUswdsFonts;
exports.copyUswdsAssets = parallel(styles.copyUswdsImages, styles.copyUswdsJs, styles.copyUswdsFonts);
exports.buildAssets = parallel(styles.buildSass, scripts.compile);
exports.buildSass = styles.buildSass;
exports.img = series(img.prep.do, img.process.do, img.upload.do);
exports.watch = gulpWatch;
exports.default = series(styles.buildSass, gulpWatch);
