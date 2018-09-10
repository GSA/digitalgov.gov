require('./config/gulp/images');
require('./config/gulp/uswds');
require('./config/gulp/scripts');
require('./config/gulp/scss');

var gulp          = require("gulp");

// - - - - - - - - - - - - - - - - -
gulp.task("watch", function () {
  gulp.watch('./themes/digital.gov/src/scss/**/*.scss', ['scss']);
  gulp.watch('./themes/digital.gov/src/uswds/**/*.scss', ['uswds-scss']);
  gulp.watch('./themes/digital.gov/src/js/*.js', ['compile']);
})

// - - - - - - - - - - - - - - - - -
// Set watch as default task
gulp.task('default', ['watch', 'scss', 'uswds-scss', 'copy-uswds-assets', 'compile']);
