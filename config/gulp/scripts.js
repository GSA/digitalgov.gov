const { src, dest, series } = require("gulp");
const webpack = require("webpack-stream");
const compiler = require("webpack");
const TerserPlugin = require('terser-webpack-plugin');

// Directories
const USWDS = "node_modules/@uswds/uswds/dist";
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
 * Bundle JavaScript into a single common.js file.
 *
 * @return {File} common.js - The bundled and uglified script.
 */
function compile() {

  // check the environment mode
  // if it is development, then set the mode to development
  const isProduction = process.env.NODE_ENV === 'production';
  const webpackConfig = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'inline-source-map',
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({
        terserOptions: {
          keep_fnames: !isProduction, // Keep function names in non-production
          keep_classnames: true
        }
      })],
    },
  };

  
  // Stream images is imported by itself in `content/images/_index.md`.
  return src([`${PROJECT_JS_SRC}/*.js`], {
    sourcemaps: true,
  })
    .pipe(
      webpack(
        webpackConfig,
        compiler
      )
    )
    .pipe(dest(JS_DEST, { sourcemaps: true }));
}

exports.copyUswdsJS = copyUswdsJS;
exports.compile = series(copyUswdsJS, compile);
