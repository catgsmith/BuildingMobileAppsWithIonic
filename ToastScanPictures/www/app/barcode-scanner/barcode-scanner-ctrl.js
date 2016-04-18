(function() {
    'use strict';

    angular.module('myApp.barcode-scanner', []).controller('BarcodeScannerCtrl', ['$scope', '$cordovaBarcodeScanner', BarcodeScannerCtrl]);

    function BarcodeScannerCtrl($scope, $cordovaBarcodeScanner) {

        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {

            $scope.scan = function() {
                $cordovaBarcodeScanner
                    .scan()
                    .then(function(barcodeData) {
                        // Success! Barcode data is here
                        $scope.results = barcodeData;
                    }, function(error) {
                        // An error occurred
                        alert("Error scanning: " + error);
                    });
            };

            // NOTE: encoding not functioning yet
            $scope.lookup = function() {
                window.open("http://www.upcindex.com/" + $scope.results.text, "_system");
            };
            $scope.reset = function() {
                $scope.results = null;
            };
        }
    }
})();
