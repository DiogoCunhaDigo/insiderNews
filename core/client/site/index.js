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
      .state({
        name: 'home',
        url: '/',
        templateUrl: 'home/templates/index.html'
      });

});
