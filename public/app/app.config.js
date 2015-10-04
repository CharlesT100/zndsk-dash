'use strict';

angular.module('zndskDash')
    .config(function($provide, $routeProvider, $locationProvider) {
      
        $routeProvider
            .when('/dash', {
                templateUrl: 'app/phoneDash/phoneDash.html',
                controller: 'PhoneDashCtrl',
                controllerAs: 'dash'
            })
            .otherwise({
                redirectTo: '/dash'
            });

        $locationProvider.html5Mode(true);

    });


var favIcon = "data:image/png;base64,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";

var docHead = document.getElementsByTagName('head')[0];
var newLink = document.createElement('link');
newLink.rel = 'shortcut icon';
newLink.href = favIcon;
docHead.appendChild(newLink);