var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    hash         = require("gulp-hash"),
    del          = require("del"),
    concat    = require('gulp-concat'),
    cleanCSS     = require('gulp-clean-css')

// Hash images
gulp.task("images", function () {
  del(["content/aws/**/*"])
  gulp.src("content/media/**/*")
    .pipe(hash())
    .pipe(hash.manifest("./data/media.json"))
    .pipe(gulp.dest("content/aws/"))
})


// ================
// Watch asset folder for changes
gulp.task("watch", ["images"], function () {
  gulp.watch("content/media/**/*", ["images"])
})

// Set watch as default task
gulp.task("default", ["watch"])
