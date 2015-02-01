'use strict';

angular.module('in.newsForms').directive('newsCreateForm', function newsCreateForm() {
  return {
   templateUrl: 'site/news-forms/templates/news-create-form.html',
    controller: 'NewsCreateFormController as newsCreate',
    bindToController: true
  };
});
