var child = require('child_process');
var gutil = require('gulp-util');
var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var cleanCSS = require('gulp-clean-css');
var notify = require("gulp-notify");

var paths = {
 scss: ['_sass/dg'],
 js: ['assets/js/main.js'],
};

gulp.task('default',['watch']);

gulp.task('jshint', function() {
  return gulp.src(paths.js)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass', function(){
  return gulp.src(paths.scss)
	.pipe(sass()) // Using gulp-sass
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(gulp.dest('assets/css/'))
  .pipe(notify({
    title: 'Done!',
    message: "<%= file.relative %>",
    // 'sound': 'Hero' //Look in /System/Library/Sounds for other sounds
    'sound': 'Pop' 
  }));
});

// Running Jekyll via Gulp
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

// Gulp watch
gulp.task('watch', function(){
  gulp.watch('assets/scss/*.scss', ['sass']); 
  gulp.watch('assets/scss/*/*.scss', ['sass']); 
  gulp.watch('assets/js/*.js', ['jshint']);
})

gulp.task('default', ['sass', 'jekyll', 'watch']);
