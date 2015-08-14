'use strict';

/**
 * @ngdoc directive
 * @name riverlogApp.directive:rlRiver
 * @description
 * # rlRiver
 */
angular.module('riverlogApp')
  .directive('rlRiver', function () {
    return {
      templateUrl: 'views/river.html',
      restrict: 'E',
      scope: {
          'run': '=riverrun',
          'total': '=',
          'log': '&',
          'runDate': '='
      },
      link: function postLink(scope, element, attrs) {

        scope.runCount = 0;

        scope.logThisRun = function() {

            if (!scope.runDate) {
                alert('Select a date, fool.'); //terrible validation, don't ever do this
                return;
            }

            scope.runCount++;
            scope.log({
                river: scope.run,
                day: scope.runDate
            });
            scope.runDate = '';
        }

        scope.showMap = function() {
            scope.run.location = 'Unable to find';
            //TODO: implement geoloaction, render google map
        }

      }
    };
  });
