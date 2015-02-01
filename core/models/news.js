'use strict';

var slug = require('cozy-slug');
var _ = require('lodash');

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

    delete data.slug;
  }

  function save() {
    return new Promise(function savePromise(resolve, reject) {

      var newsData = {
        type: 'news',
        data: data
      };

      repository
        .create(newsData)
        .then(resolve)
        .catch(reject);
    });
  }

  function find(query) {
    return new Promise(function findPromise(resolve, reject) {

      repository
        .find(query)
        .then(updateDataAndResolveFind)
        .catch(rejectFind);

      function updateDataAndResolveFind(news) {
        updateData(news);
        resolve(news);
      }

      function rejectFind(error) {
        reject(error);
      }

    });
  }

  function updateData(news) {
    return _.assign(data, news);
  }

  return Object.freeze({
    data: data,
    save: save,
    find: find,
    updateSlug: updateSlug
  });

}

module.exports = createNews;
