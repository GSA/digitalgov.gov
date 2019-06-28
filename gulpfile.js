require('./config/gulp/images');
require('./config/gulp/github');
var gulp = require("gulp");

gulp.task("process-img", gulp.series('cleanup', 'push'));
