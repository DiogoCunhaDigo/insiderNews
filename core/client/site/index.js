'use strict';

require('angular');
require('angular-ui-router');

angular.module('in.site', [
  'in.templates',
  'ui.router'
]);

angular.module('in.site')
  .config(function configureStates($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('news', {
        abstract: true,
        templateUrl: 'site/news/templates/index.html'
      })
      .state('news.home', {
        url: '/',
        templateUrl: 'site/news/templates/introduction.html'
      })
      .state('news.detail', {
        url: '/noticias/',
        templateUrl: 'site/news-detail/templates/index.html'
      });
});
