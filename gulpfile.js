var configurations = require('./core/configurations/index.js');
var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var less = require('gulp-less');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var nodemon = require('gulp-nodemon');
var liveReload = require('gulp-livereload');
var mocha = require('gulp-mocha');

gulp.task('develop', ['build-styles', 'start-core'], function() {
  // TODO: inserir watch e live-reload
});

gulp.task('start-core', function() {
  return nodemon({
    script: 'index.js'
  })
});

gulp.task('build-styles', function() {
    
  return gulp.src(configurations.paths.client + 'styles/index.less')
    .pipe(concat('style.css'))
    .pipe(less())
    .pipe(minifyCSS({
      keepSpecialComments: 0
    }))
    .pipe(gulp.dest('./content/themes/default/'));
})


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