'use strict';

var createNewsFeed = require('../../../../models/news-feed.js');
var createNewsFeedRepository = require('../repositories/news-feed.repository.js');

angular.module('in.newsFeed').factory('newsFeed', function createNewsFeedFactory($http) {

  var newsFeedRepository = createNewsFeedRepository({
    repository: $http
  });

  return createNewsFeed({
    repository: newsFeedRepository
  });

});
