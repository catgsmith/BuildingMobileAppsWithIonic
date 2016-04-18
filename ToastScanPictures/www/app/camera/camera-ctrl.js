(function() {
    'use strict';

    angular.module('myApp.camera', []).controller('CameraCtrl', ['$scope', '$cordovaCamera', CameraCtrl]);

    function CameraCtrl($scope, $cordovaCamera) {

        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {

            $scope.takePicture = function() {
                var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };

                $cordovaCamera.getPicture(options).then(function(imageData) {
                    // Success! Image data is here
                    $scope.imgSrc = "data:image/jpeg;base64," + imageData;
                }, function(err) {
                    alert("An error occured: " + err);
                });
            };

            $scope.selectPicture = function() {
                var options = {
                    destinationType: Camera.DestinationType.FILE_URI,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY
                };

                $cordovaCamera.getPicture(options).then(function(imageUri) {
                    // Success! Image data is here
                    $scope.imgSrc = imageUri;

                }, function(err) {
                    alert("An error occured: " + err);
                });
                $cordovaCamera.cleanup();
                /*$cordovaCamera.cleanup().then(...); // only for FILE_URI*/
            };
        }
    }
})();
