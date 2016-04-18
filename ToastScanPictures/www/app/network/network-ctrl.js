(function() {
    'use strict';

    angular.module('myApp.network', []).controller('NetworkCtrl', ['$rootScope', '$scope', '$cordovaNetwork', NetworkCtrl]);

    function NetworkCtrl($scope, $rootScope, $cordovaNetwork) {

        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {

            var type = $cordovaNetwork.getNetwork();
            console.log("~Log network: " + type);

            $scope.isOnline = $cordovaNetwork.isOnline();

            $scope.isOffline = $cordovaNetwork.isOffline();

            // listen for Online event
            $rootScope.$on('$cordovaNetwork:online', function(event, networkState) {
                $scope.isOnline = $cordovaNetwork.isOnline();
                $scope.isOffline = false;
                console.log("~Log network onlineState: " + networkState);
            });

            // listen for Offline event
            $rootScope.$on('$cordovaNetwork:offline', function(event, networkState) {
                $scope.isOnline = false;
                $scope.isOffline = $cordovaNetwork.isOffline();
                console.log("~Log network offlineState: " + networkState);
            });
        }
    }

})();
