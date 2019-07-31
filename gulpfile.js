var gulp = require("gulp");
require('./config/gulp/images');
require('./config/gulp/uswds');



// Image Processor
gulp.task("process-img", gulp.series('cleanup'));

// USWDS
gulp.task('watch-sass', function () {
  gulp.watch(`${PROJECT_SASS_SRC}/**/*.scss`, gulp.series('build-sass'));
});

gulp.task('watch', gulp.series('build-sass', 'watch-sass'));

gulp.task('default', gulp.series('watch'));
