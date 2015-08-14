'use strict';

/**
 * @ngdoc directive
 * @name riverlogApp.directive:rlRiverList
 * @description
 * # rlRiverList
 */
angular.module('riverlogApp')
  .directive('rlRiverList', function () {
    return {
      templateUrl: 'views/river-list.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
