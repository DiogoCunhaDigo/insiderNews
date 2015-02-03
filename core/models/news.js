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

      var query = {
        type: 'news',
        data: data
      };

      repository
        .create(query)
        .then(resolve)
        .catch(reject);
    });
  }

  function find(where) {
    return new Promise(function findPromise(resolve, reject) {

      var query = {
        type: 'news',
        where: where
      };

      repository
        .find(query)
        .then(updateDataAndResolveFind)
        .catch(rejectFind);

      function updateDataAndResolveFind(news) {
        updateInternalData(news);
        resolve(news);
      }

      function rejectFind(error) {
        reject(error);
      }

    });
  }

  function update() {

    return new Promise(function updatePromise(resolve, reject) {

      if (!data.uuid) {
        reject('No uuid found!');
        return;
      }

      var query = {
        type: 'news',
        data: data,
        where: {
          uuid: data.uuid
        }
      };

      repository
        .update(query)
        .then(resolveUpdate);

      function resolveUpdate(news) {
        updateInternalData(news);
        resolve(news);
      }

    });
  }

  function remove() {
    return new Promise(function deletePromise(resolve, reject) {

      var query = {
        type: 'news',
        data: data,
        where: {
          uuid: data.uuid
        }
      };

      repository
        .remove(query)
        .then(resolveRemove);

      function resolveRemove(news) {
        resolve(news);
      }

    });
  }


  function updateInternalData(news) {
    return _.assign(data, news);
  }

  return Object.freeze({
    data: data,
    save: save,
    find: find,
    update: update,
    remove: remove,
    updateSlug: updateSlug
  });

}

module.exports = createNews;
