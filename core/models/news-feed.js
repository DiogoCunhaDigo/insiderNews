'use strict';

function createNewsFeed(spec) {
  spec = spec || {};
  var repository = spec.repository || undefined;

  if ( !repository ) {
    throw new Error('You need to specify the repository property: "createNewsFeed({repository: repositoryObject})"');
  }

  function find() {

    return new Promise(function findNews(resolve, reject) {

      repository
        .find()
        .then(function success(news) {
          resolve(news);
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

module.exports = createNewsFeed;
