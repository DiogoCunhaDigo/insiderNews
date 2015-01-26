'use strict';

require('native-promise-only');
require('angular');
require('angular-animate');
require('angular-ui-router');

require('./news/news.module.js');
require('./news-feed/news-feed.module.js');
require('./news-detail/news-detail.module.js');


angular.module('in.site', [
  'in.templates',
  'in.news',
  'in.newsFeed',
  'in.newsDetail',
  'ui.router',
  'ngAnimate'
]);

angular.module('in.site')
  .config(function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

});


angular.module('in.site').directive('news-post', function() {


});
