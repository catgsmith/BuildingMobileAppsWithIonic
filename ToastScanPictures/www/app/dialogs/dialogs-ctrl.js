(function() {
    'use strict';
    angular.module('myApp.controllers', []).controller('DialogsCtrl', ['$scope', '$cordovaDialogs', DialogsCtrl]);

    // ACCESSES THE NATIVE DEVICE DIALOGS //////////////////////////
    function DialogsCtrl($scope, $cordovaDialogs) {

        var promise = new Promise(function(resolve, reject) {
            resolve("I am the title set by the controller");
        });

        promise.then(function(myTitle) {
            $scope.myTitle = myTitle;
        });

        /*** Alert Button **/
        $scope.alert = function() {
            $cordovaDialogs.alert('Wow!', alertClosed, "Alert Title", "Dismiss");
        };
        // alert callback function
        function alertClosed() {
            $cordovaDialogs.alert("Callback - Alert was closed.");
        }

        /*** Confirm Button **/
        $scope.confirm = function() {
            $cordovaDialogs.confirm('Dude, are you sure?', confirmClosed, "Confirmation", ["Way!", "No way"]);
        };
        // alert callback function
        function confirmClosed(buttonIndex) {
            $cordovaDialogs.alert("Callback - Button selected: " + buttonIndex);
        }

        /*** Prompt Button **/
        $scope.prompt = function() {
            $cordovaDialogs.prompt('Please Login', promptClosed, "Login", ["Login", "Cancel"]);
        };
        // prompt callback function
        function promptClosed(results) {
            alert("Callback - You selected button number " + results.buttonIndex + " and entered " + results.input1);
        }

        /*** Beep Button **/
        $scope.beep = function() {
            // beep 3 times
            $cordovaDialogs.beep(3);
        };

    }
})();
