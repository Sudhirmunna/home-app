// gulp.task('replace_webpackJsonp', function() {
//     gulp.src(["./dist/home-app.js"])
//       .pipe(replace('webpackJsonp', 'webpackJsonpB'))
//       .pipe(gulp.dest('./dist/home-app.js'))
//   });
var gulp = require('gulp');
var replace = require('gulp-string-replace');

  function defaultTask(cb) {
    gulp.src(["./dist/home-app/home-app.js"])
    .pipe(replace('webpackJsonp', 'webpackJsonpH'))
    .pipe(gulp.dest('./dist'))
    
    cb();
  }
  
  exports.default = defaultTask;
