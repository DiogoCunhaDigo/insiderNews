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

  function find(query) {
    var key = Object.keys(query)[0];
    var value = query[key];

    return new Promise(function createPromise(resolve, reject) {
      var resource = new Firebase('https://dazzling-heat-7137.firebaseio.com/newsList');

      resource
        .orderByChild(key)
        .equalTo(value)
        .once('child_added', function value(snapshot){
          var news = snapshot.val();
          resolve(news);
        });
    });
  }

  return Object.freeze({
    start: start,
    stop: stop,
    create: create,
    events: events,
    find: find
  });

}

module.exports = createNewsFeedStreamRepository;
