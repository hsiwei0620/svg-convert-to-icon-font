var gulp = require('gulp');
var gutil = require('gulp-util');

function bundle(cb) {
	gutil.log('bundling some project')
	cb();
};

function serve(cb) {
	gutil.log('serving some project')
	cb();
};

gulp.task('bundle', bundle);
gulp.task('serve', serve);