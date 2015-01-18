'use strict';

var createNewsFeed = require('../../../../models/news-feed.js');
var createRepository = require('../../../../repositories/firebase.repository.js');

angular.module('in.newsFeed').factory('newsFeed', function createNewsFeedFactory() {

  var firebase = createRepository();

  return createNewsFeed({
    repository: firebase
  });

});
