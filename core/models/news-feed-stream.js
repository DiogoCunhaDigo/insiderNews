'use strict';
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

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

  function getNewsList() {
    return newsList;
  }

  function find(queryObject) {
    return _.find(newsList, queryObject);
  }

  function addToNewsList(news) {
    newsList.push(news);

    events.emit('news:added', news);
    events.emit('newsList:updated', newsList);
  }

  function updateInNewsList(news) {

    var updatedNews = update({ uuid: news.uuid }, news );

    events.emit('news:updated', updatedNews);
    events.emit('newsList:updated', newsList);
  }

  function update(queryObject, newObject) {
    var oldObject = find(queryObject);
    var updatedNews = _.assign(oldObject, newObject);

    return updatedNews;
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

  repository.events.on('news:updated', function repositoryNewsUpdated(news) {
    updateInNewsList(news);
  });


  return Object.create({
    start: start,
    stop: stop,
    events: events,
    getNewsList: getNewsList,
    find: find
  });

}

module.exports = createNewsFeedStream;