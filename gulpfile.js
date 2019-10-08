var gulp = require("gulp");
require('./config/gulp/images');
require('./config/gulp/uswds');



// Image Processor
gulp.task("process-img", gulp.series('git-push'));

// USWDS
gulp.task('watch-sass', function () {
  gulp.watch('./themes/digital.gov/src/scss/**/*.scss', gulp.series('build-sass'));
});

gulp.task('watch', gulp.series('build-sass', 'watch-sass'));

gulp.task('default', gulp.series('watch'));
