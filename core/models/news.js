'use strict';

function createNews(spec) {
  spec = spec || {};
  var repository = spec.repository;

  if ( !repository ) {
    throw new Error('You need to specify the repository property: "createNews({repository: repositoryObject})"');
  }

  function save() {
    return new Promise(function savePromise(resolve, reject) {

      var newsData = {
        type: 'news',
        data: spec.data
      };

      repository
        .create(newsData)
        .then(resolve)
        .catch(reject);
    });
  }


  return Object.freeze({
    save: save
  });

}

module.exports = createNews;
