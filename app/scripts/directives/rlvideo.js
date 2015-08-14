'use strict';

/**
 * @ngdoc directive
 * @name riverlogApp.directive:rlVideo
 * @description
 * # rlVideo
 */
angular.module('riverlogApp')
  .directive('rlVideo', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the rlVideo directive');
      }
    };
  });
