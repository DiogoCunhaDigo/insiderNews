'use strict';

function createNewsFeedClientRepository(spec) {
  spec = spec || {};
  var $http = spec.repository ? spec.repository : undefined;

  if ( !$http ) {
    throw new Error('You need to specify an AngularJS $http repository property: "createNewsFeedRepository({repository: $http})"');
  }

  function find() {

    return new Promise(function getNews(resolve, reject) {

      $http
        .get('https://dazzling-heat-7137.firebaseio.com/news.json')
        .then(function success(result) {
          resolve(result.data);
        })
        .catch(function error(result) {
          reject(result);
        });

    });

  }

  return Object.freeze({
    find: find
  });

}

module.exports = createNewsFeedClientRepository;
