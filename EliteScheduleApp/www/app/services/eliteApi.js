(function() {
    'use strict';

    angular.module('eliteApp').factory('eliteApi', ['$http', '$q', '$ionicLoading', 'DSCacheFactory', eliteApi]);

    function eliteApi($http, $q, $ionicLoading, DSCacheFactory) {

        var currentLeagueId;

        self.leaguesCache = DSCacheFactory.get("leaguesCache");
        self.leagueDataCache = DSCacheFactory.get("leagueDataCache");

        self.leaguesCache.setOptions({
            // key value of the cache item if we need to restore to cache
            onExpire: function (key, value) {
                getLeagues()
                    .then(function () {
                        console.log("Leagues Cache was automatically refreshed.", new Date());
                    }, function () {
                        console.log("Error getting data. Putting expired item back in the cache.", new Date());
                        self.leaguesCache.put(key, value);
                    });
            }
        });


        function getLeagues() {
            var deferred = $q.defer(),
                cacheKey = "leagues",
                leaguesData = self.leaguesCache.get(cacheKey);

            if (leaguesData) {
                console.log("Found data inside cache", leaguesData);
                deferred.resolve(leaguesData);
            } else {

                $http.get("/app/resource/league.json")
                    .success(function(data) {
                        console.log("Received data via HTTP");
                        self.leaguesCache.put(cacheKey, data);
                        deferred.resolve(data);
                    })
                    .error(function() {
                        console.log("Error while making HTTP call.");
                        deferred.reject();
                    });

            }
            return deferred.promise;
        }

        function getLeagueData() {
            var deferred = $q.defer(),
                cacheKey = "leaguesData-" + currentLeagueId,
                leagueData = self.leagueDataCache.get(cacheKey);

            if (leagueData) {
                console.log("Found League data in cache", leagueData);
                deferred.resolve(leagueData);
            } else {

                $ionicLoading.show({ template: 'Loading...' });

                $http.get("/app/resource/leaguedata.json")
                    .success(function(data, status) {
                        console.log("Received scehdule data via HTTP. ", data, status);
                        self.leagueDataCache.put(cacheKey, data);
                        $ionicLoading.hide();
                        deferred.resolve(data);
                    })
                    .error(function() {
                        console.log("Error while making HTTP call.");
                        $ionicLoading.hide();
                        deferred.reject();
                    });
            }
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
