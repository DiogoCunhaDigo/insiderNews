var configurations = require('./core/configurations/index.js');
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gulpUtil = require('gulp-util');
var liveReload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');


gulp.task('develop', function() {
  nodemon({
    script: 'index.js'
  })
});


gulp.task('run-unit-test', function() {
  
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
    }));
});

gulp.task('run-tests', ['run-unit-test']);

gulp.task('develop-unit-test', function() {
  gulp.watch(['test/**', 'gulpfile.js', 'content/configurations.js', 'core/**'], ['run-unit-test']);
});