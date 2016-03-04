(function () {
    'use strict';

    angular.module('eliteApp').controller('LeaguesCtrl', ['eliteApi', LeaguesCtrl]);

    function LeaguesCtrl(eliteApi) {
        var vm = this;
        
        var leagues = eliteApi.getLeagues();
        var leaguesData = eliteApi.getLeagueData();

        console.log(leagues, leaguesData);


    }
})();