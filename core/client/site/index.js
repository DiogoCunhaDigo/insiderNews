'use strict';

require('angular');
require('angular-ui-router');
require('./news-home/news-home.module.js');

angular.module('in.site', [
  'in.templates',
  'in.newsHome',
  'ui.router'
]);

angular.module('in.site')
  .config(function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

});
