(function() {
    'use strict';
    angular.module('myApp.dialogs', []).controller('DialogsCtrl', ['$scope', '$cordovaDialogs', DialogsCtrl]);

    // ACCESSES THE NATIVE DEVICE DIALOGS //////////////////////////
    function DialogsCtrl($scope, $cordovaDialogs) {

        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {

            /*** Alert Button **/
            $scope.alert = function() {
                $cordovaDialogs.alert('Wow!', "Alert Title", "Dismiss")
                    .then(function() {
                        // callback success
                        console.log("Callback - Alert was closed.");
                    });
            };

            /*** Confirm Button **/
            $scope.confirm = function() {
                $cordovaDialogs.confirm('Dude, are you sure?', "Confirmation", ["Way!", "No way"])
                    .then(function(buttonIndex) {
                        // no button = 0, 'OK' = 1, 'Cancel' = 2
                        console.log("Callback - Button selected: " + buttonIndex);
                    });
            };

            /*** Prompt Button **/
            $scope.prompt = function() {
                $cordovaDialogs.prompt('Please Login', "Login", ["Login", "Cancel"], "3 attempts allowed")
                    .then(function(result) {
                        var input = result.input1;
                        // no button = 0, 'OK' = 1, 'Cancel' = 2
                        var btnIndex = result.buttonIndex;
                        console.log("Callback - You selected button number " + result.buttonIndex + " and entered " + result.input1);
                    });
            };

            /*** Beep Button **/
            $scope.beep = function() {
                // beep 3 times
                $cordovaDialogs.beep(3);
            };
        }

    }
})();
