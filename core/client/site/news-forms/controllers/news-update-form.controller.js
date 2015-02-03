'use strict';

angular.module('in.newsForms').controller('NewsUpdateFormController', NewsUpdateFormController);

var createNews = require('../../../../models/news.js');
var createRepository = require('../../../../repositories/firebase-stream.js');


function NewsUpdateFormController($scope) {
  var vm = this;

  vm.news = createNews({ repository: createRepository() });

  vm.news
    .find({ slug: vm.slug })
    .then(updateView);

  function updateView() {
    $scope.$evalAsync();
  }

  vm.submit = function submitNews() {
    vm.news
      .update()
      .catch(function(error) {
        console.log(error);
      });
  };

}
