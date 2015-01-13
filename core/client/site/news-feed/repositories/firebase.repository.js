'use strict';

function createFirebaseRepository(spec) {
  spec = spec || {};
  var $http = spec.resource ? spec.resource : undefined;

  if ( !$http ) {
    throw new Error('You need to specify an AngularJS $http resource property: "createRepository({resource: $http})"');
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

module.exports = createFirebaseRepository;
