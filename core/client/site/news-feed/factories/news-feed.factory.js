'use strict';

angular.module('in.newsFeed').factory('createNewsFeed', function createNewsFeedFactory($q, $http) {

  function createNewsFeed(spec) {
    spec = spec || {};
    var repository = spec.repository || $http;

    var newsList = [];

    function find() {

      /*jshint newcap: false */
      return new $q(function findNews(resolve, reject) {

        repository.get('https://dazzling-heat-7137.firebaseio.com/news.json')
          .success(function(data) {
            resolve(data);
          });
      });
    }

    return Object.freeze({
      find: find
    });

  }

  return createNewsFeed;
});
