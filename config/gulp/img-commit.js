// This file is mainly for trying to commit images through a CircleCI workflow
var gulp          = require("gulp");
var git           = require('gulp-git');


gulp.task("git-add", gulp.series('cleanup', function (done) {
  console.log('adding');
  return gulp.src('data/*')
    .pipe(git.add());
}));

gulp.task("git-commit", gulp.series('git-add', function (done) {
  console.log('commiting');
  return gulp.src('data/*')
    .pipe(git.commit('adding in images [skip ci]'));
}));

gulp.task("git-push", gulp.series('git-commit', function (done) {
  console.log('pushing...');
  git.push('origin', {args: " -f"}, function (err) {
    if (err) throw err;
  })
  done();
}));
