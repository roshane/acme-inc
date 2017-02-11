/**
 * Created by Aux-082 on 2/11/2017.
 */
(function () {
    "use strict"
    angular.module("acmeInc")
        .controller("productListController", ["productService", productListController]);

    function productListController(productService) {
        var self=this;

        self.products = [];
        self.showImage = false;

        self.getProducts = function () {
            self.resetState();
            productService.getProducts()
                .then(function (response) {
                    self.products = response.data;
                });
        };

        self.toggleImage = function () {
            self.showImage = !self.showImage;
            console.info("toggling image", self.showImage);
        };

        self.resetState = function () {
            self.products = [];
        };

        self.getProducts();

        return self;
    }
})();
