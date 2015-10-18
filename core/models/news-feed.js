'use strict';

function createNewsFeed(spec) {
  spec = spec || {};
  let repository = spec.repository;
  let newsList = [];

  if ( !repository ) {
    throw new Error('You need to specify the repository property: "createNewsFeed({repository: repositoryObject})"');
  }

  function find() {
    return new Promise(function findNews(resolve, reject) {

      repository
        .find()
        .then(function success(newsList) {
          resolve(newsList);
        })
        .catch(function error(result) {
          reject(result);
        });

    });
  }

  return {
    find: find
  };

}

module.exports = createNewsFeed;
