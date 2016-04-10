(function () {
    'use strict';

    angular.module('eliteApp').factory('eliteApi', [eliteApi]);

    function eliteApi() {
        
        var leagues = JSON.parse('[{"id":1005,"name":"5th Grade Saturday 2013-14 League","isDirty":false,"isArchived":false},{"id":1004,"name":"6th Grade Friday 2013-14 League","isDirty":false,"isArchived":false},{"id":2008,"name":"7th Grade HYBA Spring 2014","isDirty":false,"isArchived":false},{"id":1,"name":"7th Grade MS JV Friday 2013-14 League","isDirty":false,"isArchived":false},{"id":2,"name":"7th Grade MS JV Saturday 2013-14 League","isDirty":false,"isArchived":false},{"id":3,"name":"8th Grade MS Varsity Friday 2013-14 League","isDirty":false,"isArchived":false},{"id":1003,"name":"8th Grade MS Varsity Saturday 2013-14 League","isDirty":false,"isArchived":false},{"id":2007,"name":"Friday Spring 6th Grade","isDirty":false,"isArchived":false},{"id":2005,"name":"March Madness Tournament 2014","isDirty":false,"isArchived":false},{"id":2010,"name":"Metro Classic 2014","isDirty":false,"isArchived":false},{"id":2009,"name":"Spring Fling Tournament 2014","isDirty":false,"isArchived":false},{"id":2011,"name":"Summer Showdown 2014","isDirty":false,"isArchived":false}]');
        var leagueData = JSON.parse('{"league":{"name":"Spring Fling Tournament 2014", "id":2009 }, "teams":[{"divisionName":"5th Grade - Green", "divisionTeams":[{"id":3222, "name":"Columbia Ravens 5th", "coach":"John Miller"}, {"id":4299, "name":"D1 Spartans", "coach":"Jacob Silverman"}, {"id":3220, "name":"HC Elite OMalley 5th", "coach":"Eddie OMalley"}] }, {"divisionName":"5th Grade - White", "divisionTeams":[{"id":3225, "name":"CBSA Hoyas 5th Grade", "coach":"Terrance Taylor"}, {"id":3276, "name":"HC Elite 4th Tookes", "coach":"Anthony Tookes"}, {"id":3221, "name":"HC Elite Knisley 5th", "coach":"Jordan Knisley"}] }], "locations":[{"id":1003, "name":"North Laurel Comm. Center Ct. 5", "locationUrl":"http://goo.gl/maps/DlXFH", "address":"9411 Whiskey Bottom Road Laurel, MD 20723", "latitude":39.11, "longitude":-76.83 }, {"id":1011, "name":"North Laurel Comm. Center Ct. 6", "locationUrl":"http://goo.gl/maps/DlXFH", "address":"9411 Whiskey Bottom Road Laurel, MD 20723", "latitude":39.11, "longitude":-76.83 }], "games":[{"id":4764, "location":"North Laurel Comm. Center Ct. 5", "locationUrl":"http://goo.gl/maps/DlXFH", "locationId":1003, "team1":"HC Elite OMalley 5th", "team1Id":3220, "team2":"CBSA Hoyas 5th Grade", "team2Id":3225, "team1Score":"46", "team2Score":"35", "time":"2014-05-02T18:00:00"}, {"id":4767, "location":"North Laurel Comm. Center Ct. 6", "locationUrl":"http://goo.gl/maps/DlXFH", "locationId":1011, "team1":"D1 Spartans", "team1Id":4299, "team2":"HC Elite 4th Tookes", "team2Id":3276, "team1Score":"36", "team2Score":"41", "time":"2014-05-02T18:00:00"}, {"id":4768, "location":"North Laurel Comm. Center Ct. 6", "locationUrl":"http://goo.gl/maps/DlXFH", "locationId":1011, "team1":"Columbia Ravens 5th", "team1Id":3221, "team2":"HC Elite Knisley 5th", "team2Id":3248, "team1Score":"46", "team2Score":"29", "time":"2014-05-02T19:00:00"}], "standings":[{"divisionName":"5th Grade - Green", "divisionStandings":[{"teamId":3220, "teamName":"HC Elite OMalley 5th", "wins":3, "losses":1, "winningPct":".750", "pointsFor":196, "pointsAgainst":191, "pointsDiff":5 }, {"teamId":3222, "teamName":"Columbia Ravens 5th", "wins":2, "losses":2, "winningPct":".500", "pointsFor":147, "pointsAgainst":124, "pointsDiff":23 }, {"teamId":4299, "teamName":"D1 Spartans", "wins":0, "losses":0, "winningPct":".000", "pointsFor":0, "pointsAgainst":0, "pointsDiff":0 }]}, {"divisionName":"5th Grade - White", "divisionStandings":[{"teamId":3276, "teamName":"HC Elite 4th Tookes", "wins":4, "losses":1, "winningPct":".800", "pointsFor":187, "pointsAgainst":158, "pointsDiff":29 }, {"teamId":3225, "teamName":"CBSA Hoyas 5th Grade", "wins":2, "losses":2, "winningPct":".500", "pointsFor":149, "pointsAgainst":133, "pointsDiff":16 }, {"teamId":3221, "teamName":"HC Elite Knisley 5th", "wins":0, "losses":5, "winningPct":".000", "pointsFor":163, "pointsAgainst":218, "pointsDiff":-55 }] }]}');

        
        function getLeagues(){
            return leagues;
        }

        function getLeagueData(){
            return leagueData;
        };

        return {
            getLeagues: getLeagues,
            getLeagueData: getLeagueData
        };
    };
})();