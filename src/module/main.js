/**
 * Created by roshane on 1/13/2017.
 */
(function () {
    "use strict";

    var app = angular.module('acmeInc', ['angular-loading-bar', 'ngAnimate', 'serviceModule'])
        .config(function (cfpLoadingBarProvider) {
            cfpLoadingBarProvider.includeSpinner = true;
        });

    return app;
})();
