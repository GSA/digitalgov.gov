const { src, dest, series } = require("gulp"),
  uglify = require("gulp-uglify"),
  concat = require("gulp-concat"),
  jshint = require("gulp-jshint");

// Directories
const USWDS = "node_modules/@uswds/uswds/dist";
const JQUERY_PATH = "node_modules/jquery/dist/jquery.min.js";
const PROJECT_JS_SRC = "./themes/digital.gov/src/js";
const JS_DEST = "./themes/digital.gov/static/dist";

function copyUswdsJs() {
  return src(`${USWDS}/js/**/**`).pipe(dest(JS_DEST));
}

function copyJquery() {
  return src(JQUERY_PATH).pipe(dest(JS_DEST));
}

function compileCommon() {
  return src([`${PROJECT_JS_SRC}/common/**/*.js`])
    .pipe(jshint())
    .pipe(jshint.reporter()) // Dump results
    .pipe(uglify())
    .pipe(concat("common.js"))
    .pipe(dest(JS_DEST));
}

function compile() {
  // TODO: Move USWDS init to a vendor directory.
  // That way we can ignore vendor instead of individual files.
  return src([`${PROJECT_JS_SRC}/*.js`, `!${PROJECT_JS_SRC}/uswds-init.min.js`])
    .pipe(jshint())
    .pipe(jshint.reporter()) // Dump results
    .pipe(uglify())
    .pipe(dest(JS_DEST));
}

exports.compile = series(copyUswdsJs, copyJquery, compileCommon, compile);
