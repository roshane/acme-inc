(function () {
    "use strict";

    angular.module("acmeInc")
        .config(["cfpLoadingBarProvider", "$stateProvider","$urlRouterProvider", configuration]);

    function configuration(cfpLoadingBarProvider, $stateProvider, $urlRouterProvider) {

        cfpLoadingBarProvider.includeSpinner = true;

        $stateProvider.state("products", {
            url: '/products',
            controller: 'productController as vm',
            templateUrl: 'view/productListView.html'
        });

        $stateProvider.state("home", {
            url: '/home',
            controller: 'homeController as vm',
            'templateUrl': 'view/welcome.html'
        });

        //default route
        $urlRouterProvider.otherwise("/home");

        console.log("$stateProvider", $stateProvider);
    }
})();