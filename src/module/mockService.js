/**
 * Created by roshane on 1/15/2017.
 */
(function () {
    "use strict";
    var app = angular.module("mockService", ["ngMockE2E"]);

    app.run(function ($httpBackend) {
        var products = [
            {
                "image": "http://localhost/images/1.ico",
                "productName": "suscipit",
                "productCode": "AF3B296A-FFAB-B100-A29E-6B906DF1B610",
                "releaseDate": "10/08/2016",
                "price": "$1.79"
            }
        ];
        var productUrl = "data/data.json";

        $httpBackend.whenGET(productUrl)
            .respond(function () {
                console.info(new Date().getTime(),"fake product service called");
                return [200,products,{}];
            });
    });

})();