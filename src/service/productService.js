/**
 * Created by roshane on 1/14/2017.
 */
(function () {
    "use strict";

    var serviceModule = angular.module("serviceModule");

    serviceModule.factory("productService", ["$http", productService]);

    function productService($http) {
        var self = this;

        self.getProducts = function () {
            return $http.get('data/data.json');
        };

        self.getProduct = function (id) {
            return new Promise(function (resolve, reject) {
                self.getProducts()
                    .then(function (response) {
                        var p = response.data.filter(function (product) {
                            return product.productCode == id;
                        })[0];

                        if (p) {
                            resolve(p)
                        } else {
                            reject({error: 'give product not found'});
                        }
                    })
            });
        }

        return self;
    }

})();