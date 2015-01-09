'use strict';

angular.module('in.newsFeed').controller('NewsFeedController', NewsFeedController);

function NewsFeedController(createNewsFeed) {
  var vm = this;
  var newsFeed = createNewsFeed();

  newsFeed
    .find()
    .then(populateVmWithLastResults);

  function populateVmWithLastResults(news) {
    vm.news = news;
  }

}
