require('./../config/module');

(function () {

    var app = angular.module('acmeInc');

    app.controller('homeController', [function () {
        var self = this;
        self.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }]);

})();