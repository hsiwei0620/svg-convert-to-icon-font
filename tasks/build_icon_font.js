var async = require('async');
var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');

const sourcePath = "src/assets/icon_font_source/*.svg";
const resultPath = "src/assets/icon_font/";
const templatesCssPath = "icon_font_templates.css";

gulp.task('buildIconFont', done => {

	var iconStream = gulp.src([sourcePath])
		.pipe(iconfont({ 
			fontName: 'tby',
			prependUnicode: true, // recommended option
			normalize: true,
			fontHeight: 1001,
			formats: ['ttf', 'eot', 'woff2', 'svg'] 
		}));
 
	async.parallel([
		function handleGlyphs (cb) {
			iconStream.on('glyphs', function(glyphs, options) {
			gulp.src(templatesCssPath)
				.pipe(consolidate('lodash', {
					glyphs: glyphs,
					fontName: 'tby',
					fontPath: './',
					className: 'tby',
					leftbrackets: '[class^="',
					rightbrackets: '-"]'
				}))
				.pipe(gulp.dest(resultPath))
				.on('finish', cb);
			});
		},
	
		function handleFonts (cb) {
		  iconStream
			.pipe(gulp.dest(resultPath))
			.on('finish', cb);
		}
	], done);
	done();
});

