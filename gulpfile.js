const path = require("path");
const gulp = require("gulp");
const babel = require("gulp-babel");
const postcss = require("gulp-postcss");

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

gulp.task("css", function() {
  const plugins = [
    require("autoprefixer"),
    require("cssnano"),
    require("postcss-import")({
      root: __dirname,
      path: [path.join(__dirname, "./src/components")]
    }),
    require("postcss-mixins")(),
    require("postcss-each")(),
    require("postcss-apply")(),
    require("postcss-nesting")(),
    require("postcss-reporter")({ clearMessages: true })
  ];

  return gulp
    .src(["./src/components/*.css", "./src/components/**/*.css"])
    .pipe(postcss(plugins))
    .pipe(gulp.dest("./lib"));
});

gulp.task("default", ["js", "css"]);
