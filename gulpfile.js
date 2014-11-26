'use strict';

require('native-promise-only');
var configurations = require('./core/configurations/index.js');
var gulp = require('gulp');
var gutil = require('gulp-util');
var less = require('gulp-less');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var nodemon = require('gulp-nodemon');
var liveReload = require('gulp-livereload');
var mocha = require('gulp-mocha');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');


gulp.task('develop', ['build-scripts','watch-scripts', 'build-styles', 'watch-styles', 'watch-server-views', 'start-core']);


gulp.task('start-core', function() {
  return nodemon({
    script: 'index.js',
    ignore: ['./content', './core/client']
  });
});


gulp.task('build-styles', function() {
  return gulp.src(configurations.paths.assets + 'styles/index.less')
    .pipe(concat('index.css'))
    .pipe(less())
    .pipe(minifyCSS({
      keepSpecialComments: 0
    }))
    .pipe(gulp.dest(configurations.paths.content.themes + 'default/styles/'))
    .pipe(liveReload());
});


gulp.task('watch-styles', function() {
  return gulp.watch(configurations.paths.client + 'styles/**', ['build-styles']);
});


gulp.task('build-scripts', function() {
  return browserify(configurations.paths.client + 'index.js')
  .bundle()
  .pipe(source('index.js'))
  .pipe(gulp.dest(configurations.paths.content.themes + 'default/scripts/'));
});


gulp.task('watch-scripts', function() {
  var bundler = watchify(browserify(configurations.paths.client + 'index.js', watchify.args));

  function rebundle() {
    return bundler.bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('index.js'))
      .pipe(gulp.dest(configurations.paths.content.themes + 'default/scripts/'))
      .pipe(liveReload());
  }

  bundler.on('update', rebundle);
  bundler.on('log', gutil.log.bind(gutil, '[watchify]'));
});


gulp.task('watch-server-views', function() {
  return gulp.watch([configurations.paths.server + '/features/**/*.html'])
    .on('change', liveReload.changed);
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
  gulp.watch(['./test/**', './index.js', './content/configurations.js', './core/**'], ['run-unit-test']);
});
