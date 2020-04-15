var gulp = require("gulp");

require('./config/gulp/scripts');
require('./config/gulp/uswds');


// Set the environment
gulp.task('set-env', async function (done) {
  return process.env.NODE_ENV = 'development';
  done();
});

if (process.env.NODE_ENV === 'development') {
  require('./config/gulp/img-prep');
  require('./config/gulp/img-process');
  require('./config/gulp/img-upload');
  require('./config/gulp/img-commit');

  // Image Process tasks
  gulp.task("img-prep", gulp.series('mkdir'));
  gulp.task("img-process", gulp.series(gulp.parallel('img-variants', 'img-proxy')));
  gulp.task("img-upload", gulp.series('cleanup'));
  // gulp.task("img-commit", gulp.series('git-push'));

  gulp.task("img", gulp.series('img-upload'));
}

// Watch Tasks
gulp.task('watch', function () {
  gulp.watch('./themes/digital.gov/src/scss/uswds/**/*.scss', gulp.series('build-sass'));
  gulp.watch('./themes/digital.gov/src/scss/new/**/*.scss', gulp.series('build-sass'));
  gulp.watch('./themes/digital.gov/src/js/**/*.js', gulp.series('compile', 'compile-common'));
});

// gulp build-assets — build without watching
gulp.task('build-assets', gulp.series('build-sass', 'compile', 'compile-common'));

// gulp — build + watch
gulp.task('default', gulp.series('build-assets','watch'));
