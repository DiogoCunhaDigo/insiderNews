'use strict';

angular.module('in.newsFeed').controller('NewsFeedController', NewsFeedController);

function NewsFeedController($scope, newsFeed) {
  var vm = this;

  newsFeed.start();

  newsFeed.events.on('newsList:updated', updateVmWithLastResults);

  function updateVmWithLastResults(newsList){
    $scope.$apply(function apply() {
      vm.news = newsList;
    });
  }

}
