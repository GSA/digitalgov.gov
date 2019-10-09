var gulp          = require("gulp");
var git           = require('gulp-git');


gulp.task("git-add", gulp.series(function (done) {
  console.log('adding');
  return gulp.src('./*')
    .pipe(git.add());
}));

gulp.task("git-commit", gulp.series('git-add', function (done) {
  console.log('commiting');
  return gulp.src('./*')
    .pipe(git.commit('adding in images', {args: '-a'}));
}));

gulp.task("git-push", gulp.series('git-commit', function (done) {
  console.log('pushing...');
  git.push('origin', {args: " -f"}, function (err) {
    if (err) throw err;
  });
}));
