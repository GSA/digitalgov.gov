const { src, dest, series } = require("gulp");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");

// Directories
const USWDS = "node_modules/@uswds/uswds/dist";
const JQUERY_PATH = "node_modules/jquery/dist/jquery.min.js";
const PROJECT_JS_SRC = "./themes/digital.gov/src/js";
const JS_DEST = "./themes/digital.gov/static/dist/js";

/**
 * Copy USWDS scripts to dist directory.
 *
 * @return {File} uswds - The distributed USWDS JS files from node_modules.
 * Includes uswds, uswds-init, and map files.
 */
function copyUswdsJS() {
  return src(`${USWDS}/js/**/*`).pipe(dest(JS_DEST));
}

/**
 * Copy jQuery to dist directory.
 *
 * @return {File} jquery.min.js - The minified jQuery file from node_modules.
 */
function copyJquery() {
  return src(JQUERY_PATH).pipe(dest(JS_DEST));
}

/**
 * Bundle JavaScript into a single common.js file.
 *
 * @return {File} common.js - The bundled and uglified script.
 */
function compile() {
  // Stream images is imported by itself in `content/images/_index.md`.
  return src([`${PROJECT_JS_SRC}/*.js`], {
    sourcemaps: true,
  })
    .pipe(uglify())
    .pipe(concat("common.js"))
    .pipe(dest(JS_DEST, { sourcemaps: true }));
}

exports.copyUswdsJS = copyUswdsJS;
exports.compile = series(copyUswdsJS, copyJquery, compile);
