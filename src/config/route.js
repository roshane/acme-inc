(function () {
    "use strict";

    angular.module("acmeInc")
        .config(["cfpLoadingBarProvider", "$stateProvider", "$urlRouterProvider","$locationProvider", configuration]);

    function configuration(cfpLoadingBarProvider, $stateProvider, $urlRouterProvider,$locationProvider) {

        cfpLoadingBarProvider.includeSpinner = true;

        $stateProvider.state("home", {
            url: '/',
            controller: 'homeController as vm',
            template: require('./../view/welcomeView.html')
        });

        $stateProvider.state("products", {
            url: '/products',
            controller: 'productListController as vm',
            template: require('./../view/productListView.html'),
            resolve: {
                selectedProduct: function () {
                    return null;
                }
            }
        });

        $stateProvider.state("product", {
            url: "/product/:productCode",
            abstract: true,
            template: require("./../view/product.html"),
            controller: 'productController as vm',
            resolve: {
                productService: 'productService',
                selectedProduct: function (productService, $stateParams) {
                    var productCode = $stateParams.productCode;
                    console.info("activating nested view ", productCode);
                    return productService.getProduct(productCode);
                }
            }
        }).state("product.view", {
            url: '/info',
            template: require('./../view/productInfo.html')
        }).state("product.tags", {
            url: '/tags',
            template: require('./../view/productTags.html')
        });


        //default route
        $urlRouterProvider.otherwise("/");
        //remove # from url
        // $locationProvider.html5Mode(true);

        console.log("$stateProvider", $stateProvider);
    }
})();