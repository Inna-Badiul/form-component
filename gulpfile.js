var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('css/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('css/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);

