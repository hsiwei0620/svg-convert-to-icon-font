'use strict';

var gulp = require('gulp');
var HubRegistry = require('gulp-hub');

/* load some files into the registry */
var hub = new HubRegistry(['tasks/*.js']);

/* tell gulp to use the tasks just loaded */
gulp.registry(hub);

/* default task , can add new task in this task*/
gulp.task('default', gulp.parallel(
  'buildIconFont',
  'bundle',
  'serve'
));