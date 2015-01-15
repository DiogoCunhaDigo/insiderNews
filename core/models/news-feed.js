'use strict';
var EventEmitter = require('events').EventEmitter;

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
          events.emit('newsList:update', newsList);
          resolve(newsList);
        })
        .catch(function error(result) {
          reject(result);
        });

    });
  }

  function start() {

    /* ONLY MOCKING */
    var sum = 0;

    setInterval(function() {
      sum = sum + 1;
      newsList.push({
        "lastComment": "Comentário: " + sum,
        "slug": sum,
        "title": "Título " + sum,
        "xp": sum
      });

      events.emit('newsList:updated', newsList);
    }, 50);

  }

  return Object.create({
    find: find,
    start: start,
    events: events
  });

}

module.exports = createNewsFeed;
