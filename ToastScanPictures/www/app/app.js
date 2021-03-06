// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('myApp', ['ionic', 'ngCordova', 'myApp.dialogs', 'myApp.vibrates', 'myApp.network', 'myApp.device', 'myApp.camera', 'myApp.barcode-scanner'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "app/layout/menu.html"
    })

    .state('app.home', {
        url: "/home",
        views: {
            'menuContent': {
                templateUrl: "app/layout/home.html"
            }
        }
    })

    .state('app.dialogs', {
        url: "/dialogs",
        views: {
            'menuContent': {
                templateUrl: "app/dialogs/dialogs.html",
                controller: "DialogsCtrl"
            }
        }
    })

    .state('app.vibration', {
        url: "/vibration",
        views: {
            'menuContent': {
                templateUrl: "app/vibration/vibration.html",
                controller: "VibrationCtrl"
            }
        }
    })

    .state('app.network', {
        url: "/network",
        views: {
            'menuContent': {
                templateUrl: "app/network/network.html",
                controller: "NetworkCtrl"
            }
        }
    })

    .state('app.device', {
        url: "/device",
        views: {
            'menuContent': {
                templateUrl: "app/device/device.html",
                controller: "DeviceCtrl"
            }
        }
    })

    .state('app.camera', {
        url: "/camera",
        views: {
            'menuContent': {
                templateUrl: "app/camera/camera.html",
                controller: "CameraCtrl"
            }
        }
    })

    .state('app.barcode-scanner', {
        url: "/barcode-scanner",
        views: {
            'menuContent': {
                templateUrl: "app/barcode-scanner/barcode-scanner.html",
                controller: "BarcodeScannerCtrl"
            }
        }
    }); //


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});
