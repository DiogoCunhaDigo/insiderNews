var configurations = require('./core/configurations/index.js');
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gulpUtil = require('gulp-util');
var liveReload = require('gulp-livereload');

// Módulos utilizados nos testes.
// Na configuração da task 'run-mocha' eles
// serão injetados no mocha de forma global.
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var should = chai.should();
chai.use(chaiAsPromised);

gulp.task('run-mocha', function() {
  return gulp.src(['test/*.js'], { read: false })
    .pipe(mocha({
      reporter: 'list',
      globals: {
        chai: chai,
        should: should
      }
    }))
});

gulp.task('develop-test', function() {
  gulp.watch(['test/**', 'content/configurations.js', 'core/**'], ['run-mocha']);
});