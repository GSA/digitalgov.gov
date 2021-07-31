const { src, dest } = require("gulp");

const FONTAWESOME_PATH =
  "node_modules/@fontawesome/fontawesome-free/css/all.min.css";

function move(done) {
  src(FONTAWESOME_PATH).pipe(
    dest("./themes/digital.gov/static/dist/fontawesome/")
  );
  return done();
}

exports.move = move;
