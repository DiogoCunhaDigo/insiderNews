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
        "lastComment": "Comentário: " + lorem( { units: 'sentences' } ),
        "slug": sum,
        "title": lorem( { units: 'sentences' } ),
        "xp": 100
      });


      events.emit('newsList:updated', newsList);
    }, 1500);

    setInterval(function() {

      _.each(newsList, function(element, index, array) {
        array[index].xp = array[index].xp + Math.round(Math.random()*2);

        if (array[index].xp > 0) {
          array[index].xp = array[index].xp - Math.round(Math.random()*2);
        }
      });

      events.emit('newsList:updated', newsList);
    }, 150);

  }

  return Object.create({
    find: find,
    start: start,
    events: events
  });

}

module.exports = createNewsFeed;
