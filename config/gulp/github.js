var gulp = require('gulp');
var git = require('gulp-git');

// Run git add
// src is the file(s) to add (or ./*)
gulp.task('add', function(){
  return gulp.src('./*')
    .pipe(git.add({args: '-f'}));
});

// Run git commit
// src are the files to commit (or ./*)
gulp.task('commit', gulp.series('add', function (done){
  return gulp.src('./*')
    .pipe(git.commit('initial commit', {args: '-a'}));
}));

gulp.task('push', gulp.series('commit', function (done){
  git.push('origin', {args: " -f"}, function (err) {
    if (err) throw err;
  });
}));
