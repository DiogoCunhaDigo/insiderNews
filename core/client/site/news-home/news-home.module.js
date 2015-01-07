'use strict';

angular.module('in.newsHome', [
  'ui.router'
]);

angular.module('in.newsHome').config(configureNewsHomeModule);

function configureNewsHomeModule($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    .state('newsHome', {
      url: '/',
      views: {
        'main': {
          templateUrl: 'site/news-home/templates/index.html'
        },
        'newsFeed@newsHome': {
          templateUrl: 'site/news-feed/templates/index.html'
        },
        'newsDetail@newsHome': {
          templateUrl: 'site/news-home/templates/introduction.html'
        }
      }
    })
    .state('news.detail', {
      url: 'noticias/',
      views: {
        'newsDetail@newsHome': {
          templateUrl: 'site/news-detail/templates/index.html'
        }
      }
    });
}

module.exports = configureNewsHomeModule;
