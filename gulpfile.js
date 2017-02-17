var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('assets/css/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie 10']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('assets/css/*.scss', ['sass']);
});

gulp.task('js:copy', function () {
    return gulp.src('assets/js/* ')
        .pipe(gulp.dest('dist'));
});
gulp.task('default', ['js:copy', 'sass', 'watch']);

