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

    resource.on('child_removed', function onChildRemoved(snapshot) {
      var news = snapshot.val();
      events.emit('news:removed', news);
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
    return new Promise(function createPromise(resolve, reject) {
      var where = query.where;
      var whereKey = Object.keys(where)[0];
      var whereValue = where[whereKey];

      var resource = new Firebase('https://dazzling-heat-7137.firebaseio.com/newsList');

      resource
        .orderByChild(whereKey)
        .equalTo(whereValue)
        .once('child_added', function value(snapshot){
          var news = snapshot.val();
          resolve(news);
        });
    });
  }

  function update(query) {
    return new Promise(function updatePromise(resolve, reject) {

      var where = query.where;
      var whereKey = Object.keys(where)[0];
      var whereValue = where[whereKey];

      var resource = new Firebase('https://dazzling-heat-7137.firebaseio.com/newsList');

      resource
        .orderByChild(whereKey)
        .equalTo(whereValue)
        .once('child_added', function value(snapshot){
          var key = snapshot.key();
          var childResource = resource.child(key);

          childResource.update(query.data);

        });

    });

  }

  function remove(query) {
    return new Promise(function removePromise(resolve, reject) {

      var where = query.where;
      var whereKey = Object.keys(where)[0];
      var whereValue = where[whereKey];

      var resource = new Firebase('https://dazzling-heat-7137.firebaseio.com/newsList');

      resource
        .orderByChild(whereKey)
        .equalTo(whereValue)
        .once('child_added', function value(snapshot){
          var key = snapshot.key();
          var childResource = resource.child(key);

          childResource.remove();
          resolve();

        });

    });

  }

  return Object.freeze({
    start: start,
    stop: stop,
    create: create,
    events: events,
    find: find,
    update: update,
    remove: remove
  });

}

module.exports = createNewsFeedStreamRepository;
