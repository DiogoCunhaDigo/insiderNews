'use strict';
var EventEmitter = require('events').EventEmitter;
var Firebase = require('firebase');

function createNewsFeedStreamRepository(spec) {
  spec = spec || {};
  var events = new EventEmitter();
  var resource;

  function start() {
    events.emit('stream:started');
    resource = new Firebase('https://dazzling-heat-7137.firebaseio.com/');

    resource
      .orderByKey()
      .startAt("newsList")
      .endAt("newsList")
      .on('child_added', function onChildAdded(snapshot) {
        var values = snapshot.val();

        values.forEach(function(news) {
          events.emit('news:added', news);
        });
    });

//    resource.on('child_changed', function onChildChanged(snapshot) {
//      values.forEach(function(news) {
//        console.log(news);
//      });
//    });

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
