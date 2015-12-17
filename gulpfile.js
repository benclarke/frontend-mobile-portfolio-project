
var gulp = require('gulp'),
		imagemin = require('gulp-imagemin'),
		miniCss = require('gulp-minify-css'),
		miniHtml = require('gulp-minify-html'),
		gzip = require('gulp-gzip');

gulp.task('images', function() {
	return gulp.src(['img/*', 'views/images/*'])
	.pipe(imagemin())
	.pipe(gulp.dest('dist/img'))
});

gulp.task('pizzaimage', function() {
	return gulp.src('views/images/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/img'))
});

// not using this bc css is all inlined
gulp.task('minify', function() {
	return gulp.src('css/*.css')
	.pipe(miniCss({compatibility: 'ie9'}))
	.pipe(gzip())
	.pipe(gulp.dest('dist/css'))
})