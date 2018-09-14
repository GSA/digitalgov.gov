require('./config/gulp/images');
require('./config/gulp/uswds');
require('./config/gulp/scripts');
require('./config/gulp/scss');
require('./config/gulp/fontawesome');
var gulp          = require("gulp");

// - - - - - - - - - - - - - - - - -
gulp.task("watch", function () {
  gulp.watch('./themes/digital.gov/src/scss/**/*.scss', ['uswds-scss']);
  // gulp.watch('./themes/digital.gov/src/uswds/**/*.scss', ['uswds-scss']);
  gulp.watch('./themes/digital.gov/src/js/*.js', ['compile']);
})

// - - - - - - - - - - - - - - - - -
// Set watch as default task
gulp.task('default', ['watch', 'copy-uswds-assets', 'uswds-scss', 'fontawesome', 'compile']);
