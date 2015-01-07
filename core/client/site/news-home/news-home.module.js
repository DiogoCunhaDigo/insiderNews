'use strict';

angular.module('in.newsHome', [
  'ui.router',
  'in.newsFeed'
]);

require('../news-feed/news-feed.module.js');


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
          templateUrl: 'site/news-feed/templates/index.html',
          controller: 'NewsFeedCtrl as newsFeed'
        },
        'newsDetail@newsHome': {
          templateUrl: 'site/news-home/templates/introduction.html'
        }
      }
    })
    .state('newsHome.detail', {
      url: 'noticias/:slug/',
      views: {
        'newsDetail@newsHome': {
          templateUrl: 'site/news-detail/templates/index.html'
        }
      }
    });
}
