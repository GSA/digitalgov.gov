var gulp = require("gulp");

require('./config/gulp/scripts');
require('./config/gulp/uswds');

const node_env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
console.log("env: " + node_env);
if (process.env.NODE_ENV !== 'production') {
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
  gulp.watch('./content/images/_inbox/*.*', gulp.series('img'));
});

// gulp build-assets — build without watching
gulp.task('build-assets', gulp.series('build-sass', 'compile', 'compile-common'));

// gulp — build + watch
gulp.task('default', gulp.series('build-assets','watch'));
