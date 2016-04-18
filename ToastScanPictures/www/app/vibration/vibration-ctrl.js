(function() {
    'use strict';
    angular.module('myApp.vibrates', []).controller('VibrationCtrl', ['$scope', '$cordovaDevice', '$cordovaVibration', VibrationCtrl]);

    // ACCESSES THE NATIVE DEVICE VIBRATION //////////////////////////
    function VibrationCtrl($scope, $cordovaDevice, $cordovaVibration) {

        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            // Don't forget to add the org.apache.cordova.device plugin!
            var device = $cordovaDevice.getDevice();
            console.log("$cordovaDevice platform: " + device.platform);

            // will execute when device is ready, or immediately if the device is already ready.
            $scope.vibrateDevice = function() {
                console.log("Log Vibration on " + ionic.Platform.platform());
                $cordovaVibration.vibrate(500);
            };
        }
    }
})();