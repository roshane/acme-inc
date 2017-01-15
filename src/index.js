/**
 * Created by roshane on 1/13/2017.
 */

require('jquery');
require('angular');
require('angular-mocks');
require('angular-animate');
require('angular-ui-router');
require('angular-loading-bar');

var angular = require('angular');

require('./../node_modules/bootstrap/dist/css/bootstrap.css');
require('./../node_modules/bootstrap/dist/js/bootstrap.js');

require('./../node_modules/angular-loading-bar/build/loading-bar.css');
require('./../node_modules/angular-loading-bar/build/loading-bar.js');


require('./module/main');
require('./module/service');
require('./module/mockService');

require('./service/productService');
require('./controller/homeController');
require('./controller/productController');
//define at last routes
require('./config/route');
