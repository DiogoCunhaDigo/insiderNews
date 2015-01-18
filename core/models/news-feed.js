'use strict';
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');
var lorem = require('lorem-ipsum');

function createNewsFeed(spec) {
  spec = spec || {};
  var repository = spec.repository || undefined;
  var events = new EventEmitter();
  var newsList = [];

  if ( !repository ) {
    throw new Error('You need to specify the repository property: "createNewsFeed({repository: repositoryObject})"');
  }

  function find() {
    return new Promise(function findNews(resolve, reject) {

      repository
        .find()
        .then(function success(newsList) {
          events.emit('newsList:updated', newsList);
          resolve(newsList);
        })
        .catch(function error(result) {
          reject(result);
        });

    });
  }

  function start() {

  }

  return Object.create({
    find: find,
    start: start,
    events: events
  });

}

module.exports = createNewsFeed;
