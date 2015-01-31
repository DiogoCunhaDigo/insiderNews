'use strict';
var EventEmitter = require('events').EventEmitter;
var Firebase = require('firebase');

function createNewsFeedStreamRepository(spec) {
  spec = spec || {};
  var events = new EventEmitter();

  function start() {
    events.emit('stream:started');
    var resource = new Firebase('https://dazzling-heat-7137.firebaseio.com/newsList');

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

  function create(data) {
    return new Promise(function createPromise(resolve, reject) {

      var resource = new Firebase('https://dazzling-heat-7137.firebaseio.com/newsList');

      var objectToPush = data.data;
      objectToPush.xp = 100;
      objectToPush.uuid = Math.random();

      resource.push(objectToPush, pushCallback);

      function pushCallback(error) {

        if (error) {
          reject(error);
          return;
        }

        events.emit(data.type + ':created', objectToPush);
        resolve(objectToPush);
      }

    });
  }



  return Object.freeze({
    start: start,
    stop: stop,
    create: create,
    events: events
  });

}

module.exports = createNewsFeedStreamRepository;
