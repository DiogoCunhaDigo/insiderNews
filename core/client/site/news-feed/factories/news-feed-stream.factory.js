'use strict';

var createNewsFeedStream = require('../../../../models/news-feed-stream.js');
var createRepository = require('../../../../repositories/firebase-stream.js');

angular.module('in.newsFeed').factory('newsFeedStream', function createNewsFeedStreamFactory() {

  var repository = createRepository();

  var newsFeedStream = createNewsFeedStream({
    repository: repository
  });

  return newsFeedStream;

});
