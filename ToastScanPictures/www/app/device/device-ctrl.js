(function() {
    'use strict';
    angular.module('myApp.device', []).controller('DeviceCtrl', ['$scope', '$cordovaDevice', DeviceCtrl]);

    function DeviceCtrl($scope, $cordovaDevice) {

        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {

            $scope.deviceModel = function() {
                $scope.results = $cordovaDevice.getModel();
            };

            $scope.devicePlatform = function() {
                $scope.results = $cordovaDevice.getPlatform();
            };

            $scope.deviceUUID = function() {
                $scope.results = $cordovaDevice.getUUID();
            };

            $scope.deviceVersion = function() {
                $scope.results = $cordovaDevice.getVersion();
            };

            $scope.cordovaVersion = function() {
                $scope.results = $cordovaDevice.getCordova();
            };

            $scope.device = function() {
                $scope.results = $cordovaDevice.getDevice();
            };
        }
    }
})();
