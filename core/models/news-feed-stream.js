'use strict';
let EventEmitter = require('events').EventEmitter;
let _ = require('lodash');

function createNewsFeedStream(spec) {
  spec = spec || {};
  let repository = spec.repository || undefined;
  let events = new EventEmitter();
  let newsList = [];

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
    let newsAlreadyExist = find( { uuid: news.uuid } );

    if (newsAlreadyExist) {
      updateInNewsList(news);
      return;
    }

    newsList.push(news);

    events.emit('news:added', news);
    events.emit('newsList:updated', newsList);
  }

  function updateInNewsList(news) {
    let updatedNews = update({ uuid: news.uuid }, news );

    if (updatedNews) {
      events.emit('news:updated', updatedNews);
      events.emit('newsList:updated', newsList);
    }

  }

  function update(queryObject, newNews) {
    let newsToBeUpdated = find(queryObject);
    let updatedNews;

    if (newsToBeUpdated) {
      updatedNews = _.assign(newsToBeUpdated, newNews);
      return updatedNews;
    }

    return false;
  }


  function removeFromNewsList(news) {
    let removedNews = remove({ uuid: news.uuid });

    if (removedNews) {
      events.emit('news:removed', news);
      events.emit('newsList:updated', newsList);
    }

  }

  function remove(query) {
    let newsToBeRemoved = find(query);
    let removedNews;

    if (newsToBeRemoved) {
      removedNews = _.remove(newsList, query);
      return removedNews;
    }

    return false;
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

  repository.events.on('news:removed', function repositoryNewsRemoved(news) {
    removeFromNewsList(news);
  });


  return {
    start: start,
    stop: stop,
    events: events,
    getNewsList: getNewsList,
    find: find
  };

}

module.exports = createNewsFeedStream;
