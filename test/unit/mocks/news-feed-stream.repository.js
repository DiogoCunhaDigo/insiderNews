'use strict';
var EventEmitter = require('events').EventEmitter;

function createNewsFeedStreamMockRepository(spec) {
  spec = spec || {};
  var events = new EventEmitter();

  function start() {
    events.emit('started');
  }

  function stop() {
    events.emit('stopped');
  }

  return Object.freeze({
    start: start,
    stop: stop,
    events: events
  });

}

module.exports = createNewsFeedStreamMockRepository;
