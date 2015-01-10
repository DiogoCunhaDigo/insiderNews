'use strict';

angular.module('in.newsFeed').controller('NewsFeedController', NewsFeedController);

function NewsFeedController($scope, newsFeed) {
  var vm = this;

  newsFeed
    .find()
    .then(populateVmWithLastResults)
    .catch(function(data){
      console.log(data);
    });

  function populateVmWithLastResults(news) {
    vm.news = news;
    $scope.$apply();
  }

}
