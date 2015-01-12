'use strict';

angular.module('in.news', [
  'ui.router',
  'in.newsFeed'
]);

require('../news-feed/news-feed.module.js');


angular.module('in.news').config(configureNewsHomeModule);

function configureNewsHomeModule($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    .state('news', {
      url: '/',
      views: {
        'main': {
          templateUrl: 'site/news-home/templates/index.html'
        },
        'newsFeed@news': {
          templateUrl: 'site/news-feed/templates/index.html',
          controller: 'NewsFeedController as newsFeed'
        },
        'newsDetail@news': {
          templateUrl: 'site/news-home/templates/introduction.html'
        }
      }
    })
    .state('news.detail', {
      url: 'noticias/:slug/',
      views: {
        'newsDetail@news': {
          templateUrl: 'site/news-detail/templates/index.html'
        }
      }
    });
}
