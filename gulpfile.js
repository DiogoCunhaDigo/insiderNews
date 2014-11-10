var configurations = require('./core/configurations/index.js');
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gulpUtil = require('gulp-util');
var liveReload = require('gulp-livereload');


gulp.task('test-unit', function() {
  
  // Módulos utilizados que serão injetados
  // de forma global no mocha.
  var chai = require('chai');
  var chaiAsPromised = require('chai-as-promised');
  var should = chai.should();
  var expect = chai.expect;
  chai.use(chaiAsPromised);
  
  return gulp.src(['test/unit/*.js'], { read: false })
    .pipe(mocha({
      reporter: 'list',
      globals: {
        chai: chai,
        should: should,
        expect: expect
      }
    }))
});

gulp.task('develop-test-unit', function() {
  gulp.watch(['test/**', 'gulpfile.js', 'content/configurations.js', 'core/**'], ['test-unit']);
});