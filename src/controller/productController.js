(function () {

    var app = angular.module('acmeInc');

    app.controller('productController', ['productService', '$state','selectedProduct', productController]);

    function productController(productService, $state,selectedProduct) {

        var self = this;

        self.products = [];
        self.selectedProduct = selectedProduct;
        self.showImage = false;

        self.getProducts = function () {
            self.resetState();
            productService.getProducts()
                .then(function (response) {
                    self.products = response.data;
                });
        };
        //
        //self.getProduct = function (id) {
        //    self.resetState();
        //    //manually transition
        //    /*$state.go("editProduct",{productCode:id});*/
        //    //TODO fake service
        //    productService.getProducts()
        //        .then(function (response) {
        //            self.selectedProduct = response.data.filter(function (product) {
        //                return product.productCode == id;
        //            })[0];
        //        });
        //};

        self.toggleImage = function () {
            self.showImage = !self.showImage;
            console.info("toggling image", self.showImage);
        };

        self.resetState = function () {
            self.products = [];
            //self.showImage = false;
        };

        self.getProducts();

        return self;
    }

})();