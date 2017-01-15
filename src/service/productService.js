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

        return self;
    }

})();