'use strict';

angular.module('in.newsForms').controller('NewsCreateController', NewsCreateController);

var createNews = require('../../../../models/news.js');
var createRepository = require('../../../../repositories/firebase-stream.js');


function NewsCreateController($scope) {
  var vm = this;

  vm.news = createNews({ repository: createRepository() });

  vm.submit = function submitNews() {
    vm.news
      .save()
      .then(resetNews)
      .catch(function(error) {
        console.log(error);
      });
  };

  function resetNews() {
    $scope.$evalAsync(function evalAsync() {
      vm.news = createNews({ repository: createRepository() });
    });
  }

}
