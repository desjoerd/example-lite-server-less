let gulp = require('gulp');
let less = require('gulp-less');
let bs = require('browser-sync');
let autoprefixer = require('gulp-autoprefixer');

gulp.task('build', function() {
    return gulp
        .src("src/**/*.less")
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task('watch', ["build"], function() {
    return gulp
        .watch("src/**/*.less", ["build"]);
});