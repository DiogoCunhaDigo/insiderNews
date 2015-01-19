'use strict';

var createNewsFeed = require('../../../../models/news-feed.js');
var createRepository = require('../../../../repositories/firebase.js');

angular.module('in.newsFeed').factory('newsFeed', function createNewsFeedFactory() {

  var repository = createRepository();

  var newsFeed = createNewsFeed({
    repository: repository
  });

  return newsFeed;

});
