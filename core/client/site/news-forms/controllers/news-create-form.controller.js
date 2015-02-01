'use strict';

angular.module('in.newsForms').controller('NewsCreateFormController', NewsCreateFormController);

var createNews = require('../../../../models/news.js');
var createRepository = require('../../../../repositories/firebase-stream.js');


function NewsCreateFormController($scope) {
  var vm = this;

  vm.news = createNews({ repository: createRepository() });

  vm.submit = function submitNews() {
    vm.news
      .save()
      .catch(function(error) {
        console.log(error);
      });

      resetNews();
  };

  function resetNews() {
    $scope.$evalAsync(function evalAsync() {
      vm.news = createNews({ repository: createRepository() });
    });
  }

}
