(function() {
    'use strict';

    angular.module('eliteApp').controller('TeamsCtrl', ['$scope', 'eliteApi', TeamsCtrl]);

    function TeamsCtrl($scope, eliteApi) {
        var vm = this;

        // function called to refresh data
        vm.loadList = function(forceRefresh) {
            eliteApi.getLeagueData(forceRefresh).then(function(data) {
                vm.teams = data.teams;
            }).finally(function() {
                // after data is fetched -complete the ion-refresher - scroll back up
                $scope.$broadcast('scroll.refreshComplete');
            });
        };

        vm.loadList(false);
    }
})();
