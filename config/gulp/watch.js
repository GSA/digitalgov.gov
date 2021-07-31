const { series, parallel, watch } = require("gulp");

// Watch Tasks
function gulpWatch() {
  watch("./themes/digital.gov/src/scss/uswds/**/*.scss", series("build-sass"));
  watch("./themes/digital.gov/src/scss/new/**/*.scss", series("build-sass"));
  watch(
    "./themes/digital.gov/src/js/**/*.js",
    series("compile", "compile-common")
  );
  watch("./content/images/_inbox/*.*", series(foo));
}
