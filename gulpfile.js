var gulp = require('gulp');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');

gulp.task('style', function() {
	watch('core/*.css')
		.pipe(gulp.dest('./css/'))
		.pipe(livereload());    
});

gulp.task('develop', ['style']);