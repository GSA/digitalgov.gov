var child = require('child_process');
var gutil = require('gulp-util');
var gulp = require('gulp');
var notify = require("gulp-notify");

var sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
		rename = require('gulp-rename'),
    cleanCSS = require('gulp-clean-css'),
    combineMq = require('gulp-combine-mq'),
    strip = require('gulp-strip-css-comments'),
    size = require('gulp-size'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();

var supportedBrowsers = [
  	'> 1%',
  	'Last 2 versions',
  	'IE 11',
  	'IE 10',
  	'IE 9',
];

var paths = {
  scss: '_sass/main.scss',
  scssDestination: 'assets/css',
  scssSiteDestination: '_site/assets/css',
  js: 'assets/js/main.js',
};

var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: 'Rebuilding incrementally...',
    jekyllBuildComplete: 'Rebuilding complete site...'
};

const siteRoot = '_site';


gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return child.spawn( jekyll , ['build', '--incremental', '--drafts'], {stdio: 'inherit'})
        .on('close', done);
});

gulp.task('jekyll-build-complete', function (done) {
    browserSync.notify(messages.jekyllBuildComplete);
    return child.spawn( jekyll , ['build', '--drafts'], {stdio: 'inherit'})
        .on('close', done);
});

gulp.task('copy-uswds-img', function () {
  return gulp.src("./node_modules/uswds/src/img/**/*")
    .pipe(gulp.dest('./assets/uswds/img'));
});

gulp.task('copy-uswds-js', function () {
  return gulp.src("./node_modules/uswds/dist/js/**/*")
    .pipe(gulp.dest('./assets/uswds/js'));
});

gulp.task('jekyll-build-startup', ['copy-uswds-img', 'copy-uswds-img'], function (done) {
    browserSync.notify(messages.jekyllBuildComplete);
    return child.spawn( jekyll , ['build', '--drafts'], {stdio: 'inherit'})
        .on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  return gulp.src("/")
    .pipe(notify({
      "title": "digital.gov",
      "subtitle": "Incremental build finished.",
      "message": "Project reloaded.",
      "sound": "Pop" // case sensitive
    }))
    .pipe(browserSync.stream());
});

gulp.task('jekyll-rebuild-complete', ['jekyll-build-complete'], function () {
  return gulp.src("/")
    .pipe(notify({
      "title": "digital.gov",
      "subtitle": "Complete build finished.",
      "message": "Project reloaded.",
      "sound": "Pop" // case sensitive
    }))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['jekyll-build-startup'], function() {
  browserSync.init({
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });
});

gulp.task('jekyll-first-build', ['serve'], function () {
  return gulp.src("/")
    .pipe(notify({
      "title": "digital.gov",
      "subtitle": "Initial build finished.",
      "message": "Project loaded at localhost:4000.",
      "sound": "Pop" // case sensitive
    }))
    .pipe(browserSync.stream());
});

gulp.task('sass', function(){
  return gulp.src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compact',
        errLogToConsole: true,
        quiet: true,
    }).on('error', sass.logError))
    .pipe(strip())
    .pipe(
      autoprefixer({
        browsers: supportedBrowsers,
        cascade: false,
      })
    )
    .pipe(combineMq({
        beautify: true
    }))
    .pipe(cleanCSS({
      compatibility: 'ie8',
      level: 2,
    }))
    .pipe(rename('main.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.scssDestination))
    .pipe(gulp.dest(paths.scssSiteDestination))
    .pipe(size())
    .pipe(browserSync.stream())
    .pipe(notify({
      "title": "digital.gov",
      "subtitle": "/css/main.css compiled.",
      "message": "Project loaded at localhost:4000.",
      "sound": "Pop" // case sensitive
    }));
 });

// // Gulp watch
// gulp.task('watch', function(){
//   gulp.watch('assets/scss/*.scss', ['sass']);
//   gulp.watch('assets/scss/*/*.scss', ['sass']);
//   gulp.watch('assets/js/*.js', ['jshint']);
// })

gulp.task('watch', function () {
    gulp.watch('_sass/**/*', ['sass']);
    gulp.watch([
      '_includes/**/*',
      '_layouts/**/*',
      '_posts/**/*',
      'assets/img/**/*',
      'content/**/*'
    ], ['jekyll-rebuild']);
    gulp.watch([
      '_data/**/*'
    ], ['jekyll-rebuild-complete']);
});

gulp.task('default', ['jekyll-first-build', 'sass', 'watch']);
