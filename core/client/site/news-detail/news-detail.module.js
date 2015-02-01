'use strict';

angular.module('in.newsDetail', [
  'ui.router'
]);

angular.module('in.newsDetail').config(configureNewsDetailModule);

function configureNewsDetailModule($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    .state('news.detail', {
      url: 'noticias/:slug/',
      views: {
        'newsDetail@news': {
          templateUrl: 'site/news-detail/templates/index.html',
          controller: 'NewsDetailController as newsDetail'
        }
      }
    });
}

require('./controllers/news-detail.controller.js');
