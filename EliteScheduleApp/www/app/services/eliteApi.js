(function() {
    'use strict';

    angular.module('eliteApp').factory('eliteApi', ['$http', '$q', '$ionicLoading', 'DSCacheFactory', eliteApi]);

    function eliteApi($http, $q, $ionicLoading, DSCacheFactory) {

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


        self.leagueDataCache.setOptions({
            onExpire: function (key, value) {
                getLeagueData()
                    .then(function () {
                        console.log("League Data Cache was automatically refreshed.", new Date());
                    }, function () {
                        console.log("Error getting data. Putting expired item back in the cache.", new Date());
                        self.leagueDataCache.put(key, value);
                    });
            }
        });

        self.staticCache = DSCacheFactory.get("staticCache");

        function setLeagueId(leagueId){
            self.staticCache.put("currentLeagueId", leagueId);
        }

        function getLeagueId(){
            var id = self.staticCache.get("currentLeagueId");
            console.log("in get leagueid", id);
            return id;
        }


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
                cacheKey = "leaguesData-" + getLeagueId(),
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

        return {
            getLeagues: getLeagues,
            getLeagueData: getLeagueData,
            setLeagueId: setLeagueId
        };
    }
})();
