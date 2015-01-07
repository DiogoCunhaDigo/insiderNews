'use strict';

require('angular');
require('angular-ui-router');
require('./news-feed/news-feed.module.js');

angular.module('in.site', [
  'in.templates',
  'in.newsFeed',
  'ui.router'
]);

angular.module('in.site')
  .config(function configureStates($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('news', {
        url: '/',
        views: {
          'main': {
            templateUrl: 'site/news-home/templates/index.html'
          },
          'newsFeed@news': {
            templateUrl: 'site/news-feed/templates/index.html'
          },
          'newsDetail@news': {
            templateUrl: 'site/news-home/templates/introduction.html'
          }
        }
      })
      .state('news.detail', {
        url: 'noticias/',
        views: {
          'newsDetail@news': {
            templateUrl: 'site/news-detail/templates/index.html'
          }
        }
      });
});
