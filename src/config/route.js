(function () {
    "use strict";

    angular.module("acmeInc")
        .config(["cfpLoadingBarProvider", "$stateProvider", "$urlRouterProvider", configuration]);

    function configuration(cfpLoadingBarProvider, $stateProvider, $urlRouterProvider) {

        cfpLoadingBarProvider.includeSpinner = true;

        $stateProvider.state("products", {
            url: '/products',
            controller: 'productController as vm',
            templateUrl: 'view/productListView.html',
            resolve: {
                selectedProduct: function () {
                    return null;
                }
            }
        });

        $stateProvider.state("home", {
            url: '/',
            controller: 'homeController as vm',
            templateUrl: 'view/welcomeView.html'
        });

        $stateProvider.state("editProduct", {
            url: '/editProduct/:productCode',
            controller: 'productController as vm',
            templateUrl: 'view/productView.html',
            resolve: {
                productService: 'productService',
                selectedProduct: function (productService, $stateParams) {
                    var productCode = $stateParams.productCode;
                    return productService.getProduct(productCode);
                }
            }
        });

        //default route
        $urlRouterProvider.otherwise("/");

        console.log("$stateProvider", $stateProvider);
    }
})();