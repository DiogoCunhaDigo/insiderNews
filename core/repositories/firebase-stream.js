'use strict';
var EventEmitter = require('events').EventEmitter;
var Firebase = require('firebase');

function createNewsFeedStreamRepository(spec) {
  spec = spec || {};
  var events = new EventEmitter();
  var resource;

  function start() {
    events.emit('stream:started');
    resource = new Firebase('https://dazzling-heat-7137.firebaseio.com/newsList');

    resource.on('child_added', function onChildAdded(snapshot) {
      var news = snapshot.val();
      events.emit('news:added', news);
    });

    resource.on('child_changed', function onChildChanged(snapshot) {
      var news = snapshot.val();
      events.emit('news:updated', news);
    });

  }

  function stop() {
    events.emit('stream:stopped');
  }



  return Object.freeze({
    start: start,
    stop: stop,
    events: events
  });

}

module.exports = createNewsFeedStreamRepository;
