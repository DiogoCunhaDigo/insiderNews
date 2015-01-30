'use strict';

angular.module('in.newsForms').controller('NewsCreateController', NewsCreateController);

var createNews = require('../../../../models/news.js');
var createRepository = require('../../../../repositories/firebase-stream.js');


function NewsCreateController($scope) {
  var vm = this;
  var news = createNews({
    data: {
      title: "Qatar Airways compra fatia de US$1,7 bi na IAG"
    },
    repository: createRepository()
  });

  vm.news = news;

  vm.submit = function submitNews() {
    news.save();
  };

  var repository = createRepository();

//  var news = createNews({
//    repository: repository
//  });


//  newsFeedStream.start();
//
//  newsFeedStream.events.on('newsList:updated', updateVmWithLastResults);
//
//  function updateVmWithLastResults(newsList) {
//    $scope.$apply(function apply() {
//      vm.newsList = newsList;
//    });
//  }

}
