(function() {
    'use strict';

    angular.module('eliteApp').factory('eliteApi', ['$http', '$q', '$ionicLoading', '$timeout', eliteApi]);

    function eliteApi($http, $q, $ionicLoading, $timeout) {

        var currentLeagueId;


        function getLeagues() {
            var deferred = $q.defer();

            $http.get("/app/resource/league.json")
                .success(function(data) {
                    deferred.resolve(data);
                })
                .error(function() {
                    console.log("Error while making HTTP call.");
                    deferred.reject();
                });
            return deferred.promise;
        }

        function getLeagueData() {
            var deferred = $q.defer();

            $ionicLoading.show({ template: 'Loading...' });

            $http.get("/app/resource/leaguedata.json")
                .success(function(data, status) {
                    console.log("Received scehdule data via HTTP. ", data, status);

                    $timeout(function(argument) {
                        $ionicLoading.hide();
                        deferred.resolve(data);
                    }, 2000); // 2 second delay for testing purposes only

                })
                .error(function() {
                    console.log("Error while making HTTP call.");
                    $ionicLoading.hide();
                    deferred.reject();
                });
            return deferred.promise;
        }

        function setLeagueId(leagueId) {
            currentLeagueId = leagueId;
        }

        return {
            getLeagues: getLeagues,
            getLeagueData: getLeagueData,
            setLeagueId: setLeagueId
        };
    }
})();
