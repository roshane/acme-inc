(function () {

    var app = angular.module('acmeInc');

    app.controller('homeController', ['productService', homeController]);

    function homeController(productService) {
        var self = this;

        self.products = [];
        self.showImage = false;

        self.fetchData = function () {
            self.resetState();
            console.log("fetching product data", new Date());
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
            //self.showImage = false;
        };
    }

})();