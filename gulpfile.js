const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");

gulp.task("minify-css", () => {
  return gulp
    .src("**/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist"));
});

gulp.task("minify-js", () => {
  return gulp.src("**/*.js").pipe(uglify()).pipe(gulp.dest("dist"));
});

gulp.task("minify-html", () => {
  return gulp
    .src("**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"));
});

gulp.task("build", gulp.series("minify-css", "minify-js", "minify-html"));
