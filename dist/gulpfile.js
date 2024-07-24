let gulp=require("gulp"),cleanCSS=require("gulp-clean-css"),uglify=require("gulp-uglify"),htmlmin=require("gulp-htmlmin");gulp.task("minify-css",()=>gulp.src("**/*.css").pipe(cleanCSS({compatibility:"ie8"})).pipe(gulp.dest("dist"))),gulp.task("minify-js",()=>gulp.src("**/*.js").pipe(uglify()).pipe(gulp.dest("dist"))),gulp.task("minify-html",()=>gulp.src("**/*.html").pipe(htmlmin({collapseWhitespace:!0})).pipe(gulp.dest("dist"))),gulp.task("build",gulp.series("minify-css","minify-js","minify-html"));