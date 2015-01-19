'use strict';
var EventEmitter = require('events').EventEmitter;

function createNewsFeedStream(spec) {
  spec = spec || {};
  var repository = spec.repository || undefined;
  var events = new EventEmitter();
  var newsList = [];

  if ( !repository ) {
    throw new Error('You need to specify the repository property: "createNewsFeedStream({repository: repositoryObject})"');
  }

  function start() {
    repository.start();
  }

  function stop() {
    repository.stop();
  }

  function addToNewsList(news) {
    newsList.push(news);

    events.emit('news:added', news);
    events.emit('newsList:updated', newsList);
  }

  function getNewsList() {
    return newsList;
  }

  repository.events.on('stream:started', function repositoryStarted() {
    events.emit('started');
  });

  repository.events.on('stream:stopped', function repositoryStopped() {
    events.emit('stopped');
  });

  repository.events.on('news:added', function repositoryNewsAdded(news) {
    addToNewsList(news);
  });


  return Object.create({
    start: start,
    stop: stop,
    getNewsList: getNewsList,
    events: events
  });

}

module.exports = createNewsFeedStream;
