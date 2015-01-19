'use strict';

angular.module('in.newsFeed').controller('NewsFeedController', NewsFeedController);

function NewsFeedController($scope, newsFeedStream) {
  var vm = this;

  newsFeedStream.start();

  newsFeedStream.events.on('newsList:updated', updateVmWithLastResults);

  function updateVmWithLastResults(newsList) {
    $scope.$apply(function apply() {
      vm.newsList = newsList;
    });
  }

}
