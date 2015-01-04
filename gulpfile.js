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
var plumber = require('gulp-plumber');
var gulpif = require('gulp-if');
var ngAnnotate = require('gulp-ng-annotate');
var templateCache = require('gulp-angular-templatecache');
var minifyHTML = require('gulp-minify-html');
var taskName = gutil.env._[0];

var errorHandler = function(error) {
  gutil.beep();

  console.log('\n');
  gutil.log(gutil.colors.bgRed.white(' ERROR: ') + ' ' + gutil.colors.red(error.plugin));
  gutil.log(gutil.colors.white(error.message));

  console.log('');
  gutil.log(gutil.colors.white(' -- Line ' + error.lineNumber + ' -- '));
  gutil.log(gutil.colors.white(error.extract[0]));
  gutil.log(gutil.colors.red(error.extract[1]));
  gutil.log(gutil.colors.white(error.extract[2]));

  console.log('\n');
  this.emit('end');
};

function isDevelopment() {
  if (taskName === 'develop') {
    return true;
  }

  return false;
}


gulp.task('start-web-server', function() {
  return nodemon({
    script: 'index.js',
    ignore: ['./content', './core/client']
  });
});


gulp.task('build-client-templates', function(){
  return gulp.src(configurations.paths.client + '**/*.html')
    .pipe(minifyHTML({
      quotes: true,
      empty: true
    }))
    .pipe(templateCache({
      filename: 'insider-templates.js',
      module: 'in.templates',
      standalone: true
    }))
    .pipe(gulp.dest(configurations.paths.content.themes + 'default/scripts/'));
});

gulp.task('livereload-listen', function() {
    return liveReload.listen();
});

gulp.task('watch-client-templates', function(){

  return gulp.watch(configurations.paths.client + '**/*.html', ['build-client-templates'])
    .on('change', liveReload.changed);
});



gulp.task('build-images', function() {
  return gulp.src(configurations.paths.assets + '/images/**/*')
    .pipe(plumber({
      errorHandler: errorHandler
	}))
    .pipe(gulp.dest(configurations.paths.content.themes + 'default/images/'))
    .pipe(gulpif(isDevelopment(), liveReload()));
});


gulp.task('build-styles', function() {
  return gulp.src(configurations.paths.assets + 'styles/index.less')
    .pipe(plumber({
      errorHandler: errorHandler
	}))
    .pipe(concat('index.css'))
    .pipe(less())
    .pipe(gulpif(!isDevelopment(), minifyCSS({ keepSpecialComments: 0 })))
    .pipe(gulp.dest(configurations.paths.content.themes + 'default/styles/'))
    .pipe(gulpif(isDevelopment(), liveReload()));
});


gulp.task('watch-styles', function() {
  return gulp.watch(configurations.paths.assets + 'styles/**', ['build-styles']);
});


gulp.task('build-scripts', function() {
  return browserify(configurations.paths.client + 'site/index.js')
  .bundle()
  .pipe(plumber())
  .pipe(source('insider-site.js'))
  .pipe(ngAnnotate())
  .pipe(gulp.dest(configurations.paths.content.themes + 'default/scripts/'));
});


gulp.task('watch-scripts', function() {
  var bundler = watchify(browserify(configurations.paths.client + 'site/index.js', watchify.args));

  function bundle() {
    return bundler.bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('insider-site.js'))
      .pipe(gulp.dest(configurations.paths.content.themes + 'default/scripts/'))
      .pipe(liveReload());
  }

  bundler.on('update', bundle);
  bundler.on('log', gutil.log.bind(gutil, '[watchify]'));

  return bundle();
});


gulp.task('watch-server-views', function() {
  return gulp.watch([configurations.paths.server + '**/*.html'])
    .on('change', liveReload.changed);
});


gulp.task('watch-images', function() {
  return gulp.watch([configurations.paths.assets + '/images/**/*'], ['build-images'])
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

  return gulp.src(['test/unit/**/*.spec.js'], { read: false })
    .pipe(plumber())
    .pipe(mocha({
      reporter: 'list',
      globals: {
        chai: chai,
        should: should,
        expect: expect
      }
    }));
});

gulp.task('develop', [
  'build-scripts',
  'build-client-templates',
  'build-styles',
  'build-images',
  'livereload-listen',
  'watch-scripts',
  'watch-client-templates',
  'watch-styles',
  'watch-images',
  'watch-server-views',
  'start-web-server'
]);

gulp.task('build', [
  'build-scripts',
  'build-client-templates',
  'build-styles',
  'build-images'
]);

gulp.task('run-tests', ['run-unit-test']);

gulp.task('develop-unit-test', ['run-unit-test'], function() {
  gulp.watch(['./test/**', './index.js', './content/configurations.js', './core/**'], ['run-unit-test']);
});
