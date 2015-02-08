'use strict';

var defaultResource = require('browser-request');

function createFirebaseRepository(spec) {
  spec = spec || {};
  var resource = spec.resource || defaultResource;

  if ( !resource ) {
    throw new Error('You need to specify a resource property: "createRepository({resource: resource})"');
  }

  function find() {

    return new Promise(function getNews(resolve, reject) {

      resource.get('https://dazzling-heat-7137.firebaseio.com/news.json', onResponse);

      function onResponse(error, response, body) {

        if (!error && response.statusCode === 200) {
          resolve(JSON.parse(body));
        }

        reject(error);

      }

    });

  }

  return {
    find: find
  };

}

module.exports = createFirebaseRepository;
