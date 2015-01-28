'use strict';

angular.module('in.news', [
  'ui.router'
]);

angular.module('in.news').config(configureNewsHomeModule);

function configureNewsHomeModule($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    .state('news', {
      url: '/',
      views: {
        'main': {
          templateUrl: 'site/news/templates/index.html'
        },
        'newsFeed@news': {
          templateUrl: 'site/news-feed/templates/index.html',
          controller: 'NewsFeedController as newsFeed'
        },
        'newsDetail@news': {
          templateUrl: 'site/news/templates/introduction.html'
        }
      }
    });
}
