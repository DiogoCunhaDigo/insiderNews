'use strict';

require('angular');
require('angular-ui-router');

angular.module('in.site', [
  'in.site.templates',
  'ui.router'
]);

angular.module('in.site')
  .config(function configureStates($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('news', {
        abstract: true,
        templateUrl: 'news/templates/index.html'
      })
      .state('news.home', {
        url: '/',
        views: {
          'news-feed': {
            templateUrl: 'news-feed/templates/index.html'
          },
          'news-detail': {
            templateUrl: 'news/templates/introduction.html'
          }
        }
      })
      .state('news.detail', {
        url: '/noticias/',
        views: {
          'news-feed': {
            templateUrl: 'news-feed/templates/index.html'
          },
          'news-detail': {
            templateUrl: 'news-detail/templates/index.html'
          }
        }
      });

});
