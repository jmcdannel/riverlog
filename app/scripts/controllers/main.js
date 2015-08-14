'use strict';

/**
 * @ngdoc function
 * @name riverlogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the riverlogApp
 */
angular.module('riverlogApp')
  .controller('MainCtrl', function ($scope, rlRivers) {

    $scope.rivers = rlRivers.getRivers();
    $scope.loggedRuns = [];
    //$scope.fav = rlRivers.getFav(); //not implemented
    $scope.totalRunCount = 0;
    $scope.tab = 'rivers';


    $scope.logrun = function(river, runDate) {
        $scope.totalRunCount++;
        $scope.loggedRuns.push({
            river: river,
            date: runDate
        });
    }

    $scope.tabClick = function(whichTab) {
        $scope.tab = whichTab;
    }

  });
