(function() {
    'use strict';

    angular.module('eliteApp').factory('eliteApi', ['$http', '$q', eliteApi]);

    function eliteApi($http, $q) {

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

            $http.get("/app/resource/leaguedata.json")
                .success(function(data, status) {
                    console.log("Received scehdule data via HTTP. ", data, status);
                    deferred.resolve(data);
                })
                .error(function() {
                    console.log("Error while making HTTP call.");
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
