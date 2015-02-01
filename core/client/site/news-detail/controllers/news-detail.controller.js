'use strict';

angular.module('in.newsDetail').controller('NewsDetailController', NewsDetailController);

function NewsDetailController($scope, $stateParams) {
  var vm = this;

  vm.slug = $stateParams.slug;
}
