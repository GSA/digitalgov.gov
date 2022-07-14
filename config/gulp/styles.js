/*
* * * * * ==============================
* * * * * ==============================
* * * * * ==============================
* * * * * ==============================
========================================
========================================
========================================
----------------------------------------
USWDS SASS GULPFILE
----------------------------------------
*/

const { src, dest, series } = require("gulp");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const pkg = require("../../node_modules/@uswds/uswds/package.json");
const postcss = require("gulp-postcss");
const replace = require("gulp-replace");
const sass = require("gulp-sass")(require("sass-embedded"));
const sourcemaps = require("gulp-sourcemaps");
const svgSprite = require("gulp-svg-sprite");
const rename = require("gulp-rename");

/*
----------------------------------------
PATHS
----------------------------------------
- All paths are relative to the
  project root
- Don't use a trailing `/` for path
  names
----------------------------------------
*/

const USWDS = "./node_modules/@uswds/";

// USWDS source directory
const USWDS_SRC = "./themes/digital.gov/src/scss/uswds";

// Project Sass source directory
const PROJECT_SASS_SRC = "./themes/digital.gov/src/scss/new";

// Project JS source directory
const PROJECT_JS_SRC = "./themes/digital.gov/src/js";

// Images destination
const IMG_DEST = "./themes/digital.gov/static/uswds/img";

// Fonts destination
const FONTS_DEST = "./themes/digital.gov/static/uswds/fonts";

// Javascript destination
const JS_DEST = "./themes/digital.gov/static/dist";

// Compiled CSS destination
const CSS_DEST = "./themes/digital.gov/static/dist";

// Site CSS destination
// Like the _site/assets/css directory in Jekyll, if necessary.
// If using, uncomment line 112
const SITE_CSS_DEST = "./path/to/site/css/destination";

// SVG sprite configuration
const spriteConfig = {
  shape: {
    dimension: {
      // Set maximum dimensions
      maxWidth: 24,
      maxHeight: 24,
    },
    id: {
      separator: "-",
    },
    spacing: {
      // Add padding
      padding: 0,
    },
  },
  mode: {
    symbol: true, // Activate the «symbol» mode
  },
};

/*
----------------------------------------
TASKS
----------------------------------------
*/

function copyUswdsSetup() {
  return src(`${USWDS}/uswds/dist/scss/theme/**/**`).pipe(dest(`${USWDS_SRC}`));
}

function copyUswdsFonts() {
  return src(`${USWDS}/uswds/dist/fonts/**/**`).pipe(dest(`${FONTS_DEST}`));
}

function copyUswdsImages() {
  return src(`${USWDS}/uswds/dist/img/**/**`).pipe(dest(`${IMG_DEST}`));
}

function copyUswdsJs() {
  return src(`${USWDS}/uswds/dist/js/**/**`).pipe(dest(`${JS_DEST}`));
}

function buildSass() {
  const plugins = [
    autoprefixer({
      cascade: false,
      grid: true,
    }),
    csso({ forceMediaMerge: true }),
  ];
  return (
    src([`${PROJECT_SASS_SRC}/**/*.scss`])
      .pipe(sourcemaps.init({ largeFile: true }))
      .pipe(
        sass({
          includePaths: [
            PROJECT_SASS_SRC,
            `${USWDS}`,
            `${USWDS}/uswds/packages`,
          ],
        })
      )
      .pipe(replace(/\buswds @version\b/g, "based on uswds v" + pkg.version))
      .pipe(postcss(plugins))
      .pipe(sourcemaps.write("."))
      // uncomment the next line if necessary for Jekyll to build properly
      //.pipe(dest(`${SITE_CSS_DEST}`))
      .pipe(dest(CSS_DEST))
  );
}

function buildSprite() {
  return src(`${IMG_DEST}/usa-icons/**/*.svg`, {
    allowEmpty: true,
  })
    .pipe(svgSprite(spriteConfig))
    .on("error", function (error) {
      console.log("There was an error building the sprite");
    })
    .pipe(dest(`${IMG_DEST}`));
}

function renameSprite() {
  return src(`${IMG_DEST}/symbol/svg/sprite.symbol.svg`, {
    allowEmpty: true,
  })
    .pipe(rename(`${IMG_DEST}/sprite.svg`))
    .pipe(dest(`./`));
}

function cleanSprite() {
  return del.sync(`${IMG_DEST}/symbol`);
}

exports.init = series(
  copyUswdsSetup,
  copyUswdsFonts,
  copyUswdsImages,
  copyUswdsJs,
  buildSass
);

exports.copyUswdsFonts = copyUswdsFonts;
exports.copyUswdsImages = copyUswdsImages;
exports.copyUswdsJs = copyUswdsJs;

exports.buildSass = buildSass;
