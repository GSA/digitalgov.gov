var child = require('child_process');
var gutil = require('gulp-util');
var gulp = require('gulp');
var notify = require("gulp-notify");

var paths = {
 scss: ['_sass/dg'],
 js: ['assets/js/main.js'],
};


// Running Jekyll via Gulp
// via https://aaronlasseigne.com/2016/02/03/using-gulp-with-jekyll/
gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['serve',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };
  notify({
    title: 'Done!',
    message: "<%= file.relative %>",
    // 'sound': 'Hero' //Look in /System/Library/Sounds for other sounds
    'sound': 'Pop' 
  });
  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

// // Gulp watch
// gulp.task('watch', function(){
//   gulp.watch('assets/scss/*.scss', ['sass']); 
//   gulp.watch('assets/scss/*/*.scss', ['sass']); 
//   gulp.watch('assets/js/*.js', ['jshint']);
// })

gulp.task('default', ['jekyll']);
