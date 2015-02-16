'use strict';

var slug = require('cozy-slug');
var _ = require('lodash');
var schemaValidation = require('is-my-json-valid');

function createNews(spec) {
  spec = spec || {};
  var repository = spec.repository;
  var data = spec.data || {};
  var errors = {};

  var schema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "title": {
        "type": "string",
        "minLength": 1
      },
      "slug": {
        "type": "string",
        "minLength": 1
      }
    },
    "required": ["title", "slug"],
    "additionalProperties": false
  };


  if ( !repository ) {
    throw new Error('You need to specify the repository property: "createNews({repository: repositoryObject})"');
  }

  function updateSlug() {
    if (data.title) {
      data.slug = slug(data.title);
      return data.slug;
    }

    data.slug = "";
  }

  function validate() {
    return new Promise(function validatePromise(resolve, reject) {

      var validator = schemaValidation(schema);
      var validationResult = validator(data);
      var formatedError;

      if (validationResult) {
        clearInstanceErrors();
        resolve();
        return;
      }

      formatedError = formatErrors(validator.errors);
      updateInstaceErrors(formatedError);
      reject(errors);
    });
  }

  function formatErrors(unformatedErrors) {
    var formatedErrors = {};

    unformatedErrors.forEach(function(error) {
      var key = error.field.split('.')[1];
      var message = error.message;

      formatedErrors[key] = [message];
    });

    return formatedErrors;

  }

  function updateInstaceErrors(formatedErrors) {
    return _.assign(errors, formatedErrors);
  }

  function clearInstanceErrors() {
    _.forEach(errors, function deleteKeyFromErrors(value, key) {
      delete errors[key];
    });
  }



  function save() {
    return new Promise(function savePromise(resolve, reject) {

      validate()
        .then(queryRepository)
        .catch(rejectValidation);


      function queryRepository() {
        var query = {
          type: 'news',
          data: data
        };

        repository
          .create(query)
          .then(resolve)
          .catch(reject);
      }

      function rejectValidation(errors) {
        reject(errors);
      }


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
        updateInstanceData(news);
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
        updateInstanceData(news);
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


  function updateInstanceData(news) {
    return _.assign(data, news);
  }

  return {
    data: data,
    errors: errors,
    save: save,
    find: find,
    validate: validate,
    update: update,
    remove: remove,
    updateSlug: updateSlug
  };

}

module.exports = createNews;
