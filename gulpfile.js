const path = require("path");
const gulp = require("gulp");
const babel = require("gulp-babel");

gulp.task("js", function() {
  return gulp
    .src([
      "./src/**/*.js",
      "./src/**/*.js",
      "!./src/**/*.spec.js",
      "!./src/**/*.story.js",
      "!./src/**/__test__",
      "!./src/__mocks__/**/*.js"
    ])
    .pipe(babel())
    .pipe(gulp.dest("./lib"));
});

gulp.task("scss", function() {
  return gulp
    .src(["./src/**/*.scss", "./src/**/**/*.scss"])
    .pipe(gulp.dest("./lib"));
});

gulp.task("default", ["js", "scss"]);
