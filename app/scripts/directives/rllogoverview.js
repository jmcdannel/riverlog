'use strict';

/**
 * @ngdoc directive
 * @name riverlogApp.directive:rlLogOverview
 * @description
 * # rlLogOverview
 */
angular.module('riverlogApp')
  .directive('rlLogOverview', function () {
    return {
      templateUrl: 'views/overview.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
