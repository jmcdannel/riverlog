'use strict';

/**
 * @ngdoc service
 * @name riverlogApp.rlRivers
 * @description
 * # rlRivers
 * Factory in the riverlogApp.
 */
angular.module('riverlogApp')
  .factory('rlRivers', function () {
    // Service logic
    // ...

    var rivers = [
        {
            name: 'Grand Canyon',
            location: 'Arizona'
        },
        {
            name: 'Middle Fork of the Salmon',
            location: 'Idaho'
        },
        {
            name: 'South Fork of the Salmon',
            location: 'Idaho'
        }
    ];

    var myFavoriteRiver = {
        name: 'Grand Canyon',
        state: 'Arizona'
    };

    // Public API here
    return {
          getRivers: function () {
            return rivers;
        },
        getFav: function() {
            return myFavoriteRiver;
        }
    };
  });
