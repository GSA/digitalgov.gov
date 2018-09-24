require('./config/gulp/images');
require('./config/gulp/uswds');
require('./config/gulp/scripts');
require('./config/gulp/fontawesome');
var gulp = require("gulp");



// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// LOCATIONS

// All locations are relative to the project root
// Don't use a trailing `/` for path names, use `path/to/dir`

// USWDS source directory
const USWDS_SRC         = 'node_modules/uswds/dist';

// Project Sass source directory
const PROJECT_SASS_SRC  = './themes/digital.gov/src/uswds';

// Project JS source directory
const PROJECT_JS_SRC  = './themes/digital.gov/src/js';


// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
gulp.task('watch', ['build-sass'], function (){
  gulp.watch(`${PROJECT_SASS_SRC}/*.scss`, ['build-sass'])
  gulp.watch(`${PROJECT_SASS_SRC}/scss/*.scss`, ['build-sass'])
  gulp.watch(`${PROJECT_JS_SRC}/*.js`, ['compile'])
  gulp.watch(`${USWDS_SRC}/scss/*.scss`, ['copy-uswds-assets','build-sass']);
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Set watch as default task
// gulp.task('default', ['watch', 'copy-uswds-assets', 'copy-uswds-fonts', 'build-sass', 'fontawesome', 'compile']);
gulp.task('default', ['watch', 'compile','build-sass']);
