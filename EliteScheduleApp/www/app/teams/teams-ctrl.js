(function () {
    'use strict';

    angular.module('eliteApp').controller('TeamsCtrl', ['eliteApi', TeamsCtrl]);

    function TeamsCtrl(eliteApi) {
        var vm = this;
        
        var data = eliteApi.getLeagueData(function(data){
            vm.teams = data.teams;
        });
        /*console.log(data);
        vm.teams = data.teams;*/

    }
})();