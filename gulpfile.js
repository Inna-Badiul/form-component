var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('component-src/css/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie 10']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('component-src/css/*.scss', ['sass']);
});

gulp.task('js:copy', function () {
    return gulp.src('component-src/js/* ')
        .pipe(gulp.dest('dist'));
});

gulp.task('images:copy', function () {
    return gulp.src('component-src/images/* ')
        .pipe(gulp.dest('dist/images'));
});
gulp.task('default', ['js:copy', 'images:copy', 'sass', 'watch']);

