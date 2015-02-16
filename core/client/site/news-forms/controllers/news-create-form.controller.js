'use strict';

angular.module('in.newsForms').controller('NewsCreateFormController', NewsCreateFormController);

var createNews = require('../../../../models/news.js');
var createRepository = require('../../../../repositories/firebase-stream.js');


function NewsCreateFormController($scope) {
  var newsCreate = this;

  newsCreate.news = createNews({ repository: createRepository() });

  newsCreate.submit = function submitNews() {

    newsCreate.news
      .save()
      .then(resetNews)
      .catch(updateView);

  };

  newsCreate.newsTitleChange = function newsTitleChange() {
    newsCreate.news.updateSlug();

    newsCreate.news
      .validate()
      .catch(updateView);
  };

  function resetNews() {
    $scope.$evalAsync(function evalAsync() {
      newsCreate.news = createNews({ repository: createRepository() });
    });
  }

  function updateView() {
    $scope.$evalAsync();
  }

}
