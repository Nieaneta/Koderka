var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync").create();

gulp.task("watch", function(cb) {
    gulp.watch("src/scss/**/*.scss", gulp.series("sass"));
    cb();
});

gulp.task("serve", function(cb) {
    browserSync.init({
        server: "./develop"
    });
    gulp.watch("src/scss/**/*.scss", gulp.series("sass"));
    gulp.watch("develop/*.html").on("change", browserSync.reload);
    gulp.watch("develop/js/*.js").on("change", browserSync.reload);
    cb();
});

// Compile sass into CSS & auto-inject into browsers
gulp.task("sass", function() {
    return gulp
        .src("src/scss/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("develop/css"));
});

gulp.task("default", gulp.series("serve"));
