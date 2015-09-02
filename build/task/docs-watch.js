var docs = require('./docs');
var galv = require('galvatron');
var gulp = require('gulp');
var gulpWebserver = require('gulp-webserver');

module.exports = function () {
  galv.watch('docs/**', docs).on('end', function () {
    gulp.src('.tmp/docs').pipe(gulpWebserver({
      host: '0.0.0.0',
      livereload: false,
      open: true
    }));
  });
};
