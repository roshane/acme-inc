(function () {

    var app = angular.module('acmeInc');

    app.controller('productController', ['productService', '$state','selectedProduct', productController]);

    function productController(productService, $state,selectedProduct) {

        var self = this;

        self.selectedProduct = selectedProduct;
        self.url="http://google.com";

        console.log("selected product",selectedProduct);

        return self;
    }

})();