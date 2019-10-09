var gulp = require("gulp");

require('./config/gulp/img-prep');
require('./config/gulp/img-process');
require('./config/gulp/img-upload');
require('./config/gulp/img-commit');

require('./config/gulp/uswds');


// Image Process tasks
gulp.task("img-prep", gulp.series('mkdir'));
gulp.task("img-process", gulp.series(gulp.parallel('img-variants', 'img-proxy')));
gulp.task("img-upload", gulp.series('cleanup'));
gulp.task("img-commit", gulp.series('git-push'));

gulp.task("img", gulp.series('img-commit'));

// USWDS
gulp.task('watch-sass', function () {
  gulp.watch('./themes/digital.gov/src/scss/**/*.scss', gulp.series('build-sass'));
});

gulp.task('watch', gulp.series('build-sass', 'watch-sass'));

gulp.task('default', gulp.series('watch'));
