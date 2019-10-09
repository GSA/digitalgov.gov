require('./config/gulp/img-prep');
require('./config/gulp/img-process');
require('./config/gulp/img-upload');
require('./config/gulp/img-commit');
require('./config/gulp/scripts');
require('./config/gulp/fontawesome');
require('./config/gulp/uswds');
var gulp = require("gulp");


// Image Process tasks
gulp.task("img-prep", gulp.series('mkdir'));
gulp.task("img-process", gulp.series(gulp.parallel('img-variants', 'img-proxy')));
gulp.task("img-upload", gulp.series('cleanup'));
// gulp.task("img-commit", gulp.series('git-push'));

gulp.task("img", gulp.series('img-upload'));


// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// LOCATIONS

// All locations are relative to the project root
// Don't use a trailing `/` for path names, use `path/to/dir`

// USWDS source directory
const USWDS_SRC  = './themes/digital.gov/src/scss/uswds';

// Project Sass source directory
const PROJECT_SASS_SRC  = './themes/digital.gov/src/scss/new';

// Project JS source directory
const PROJECT_JS_SRC  = './themes/digital.gov/src/js';


// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// gulp.task('watch', gulp.series('build-sass', function (){
  // gulp.watch(`${PROJECT_SASS_SRC}/**/*.scss`, gulp.series('build-sass'))
  // gulp.watch(`${PROJECT_SASS_SRC}/scss/*.scss`, gulp.series('build-sass'))
  // gulp.watch(`${PROJECT_JS_SRC}/*.js`, gulp.series('compile'))
  // gulp.watch(`${USWDS_SRC}/scss/*.scss`, gulp.series('copy-uswds-assets','build-sass'));
// }));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Set watch as default task
// gulp.task('default', gulp.series('watch', 'copy-uswds-assets', 'copy-uswds-fonts', 'build-sass', 'fontawesome', 'compile'));
// gulp.task('default', gulp.series('watch', 'compile','build-sass'));


gulp.task('watch-sass', function () {
  gulp.watch(`${USWDS_SRC}/**/*.scss`, gulp.series('build-sass'));
  gulp.watch(`${PROJECT_SASS_SRC}/**/*.scss`, gulp.series('build-sass'));
  gulp.watch(`${PROJECT_JS_SRC}/**/*.js`, gulp.series('compile'));
});

gulp.task('watch', gulp.series('build-sass', 'copy-jquery', 'compile', 'watch-sass'));

gulp.task('default', gulp.series('watch'));
