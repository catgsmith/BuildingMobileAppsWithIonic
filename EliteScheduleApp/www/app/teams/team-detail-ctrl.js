(function () {
    'use strict';

    angular.module('eliteApp').controller('teamDetailCtrl', ['$stateParams',teamDetailCtrl]);

    function teamDetailCtrl($stateParams) {
        console.log("$stateParams", $stateParams);
    }
})();