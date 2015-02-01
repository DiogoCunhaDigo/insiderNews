'use strict';

angular.module('in.newsForms').directive('newsUpdateForm', function newsUpdateForm() {
  return {
    templateUrl: 'site/news-forms/templates/news-update-form.html',
    controller: 'NewsUpdateFormController as newsUpdate',
    bindToController: true,
    scope: {
      slug: '@'
    }
  };
});
