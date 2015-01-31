'use strict';

var slug = require('cozy-slug');

function createNews(spec) {
  spec = spec || {};
  var repository = spec.repository;
  var data = spec.data || {};

  if ( !repository ) {
    throw new Error('You need to specify the repository property: "createNews({repository: repositoryObject})"');
  }

  function updateSlug() {
    if (data.title) {
      data.slug = slug(data.title);
      return data.slug;
    }

    data.slug = undefined;
    return data.slug;
  }

  function save() {
    return new Promise(function savePromise(resolve, reject) {

      var newsData = {
        type: 'news',
        data: data
      };

//      repository
//        .create(newsData)
//        .then(resolve)
//        .catch(reject);
    });
  }

  updateSlug();

  return Object.freeze({
    save: save,
    updateSlug: updateSlug,
    data: data
  });

}

module.exports = createNews;
