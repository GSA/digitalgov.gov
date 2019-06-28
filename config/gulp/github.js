var gulp = require('gulp');
var git = require('gulp-git');

// Run git add
// src is the file(s) to add (or ./*)
gulp.task('add', function(){
  return gulp.src('./*')
    .pipe(git.add({args: '-f'}));
});

// Run git commit with a computed commit message
gulp.task('commit', gulp.series('add', function (done){
  let newVersion;
  function computeNewVersion() { newVersion = "3.3" }
  return gulp.src('*')
    .pipe(computeNewVersion())
    .pipe(git.commit(() => `new image`));
}));

// gulp.task("commit", gulp.series('add', function (done) {
//   return gulp.src('*')
//     .pipe(git.add());
// }));
