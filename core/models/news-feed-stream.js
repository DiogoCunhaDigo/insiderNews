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
    events.emit('started');

    repository.events.on('started', function repositoryStarted() {
      events.emit('repository:started');
    });

    repository.start();
  }

  function stop() {
    events.emit('stopped');

    repository.events.on('stopped', function repositoryStarted() {
      events.emit('repository:stopped');
    });

    repository.stop();

  }

  return Object.create({
    start: start,
    stop: stop,
    events: events
  });

}

module.exports = createNewsFeedStream;
