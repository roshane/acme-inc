/**
 * Created by roshane on 1/13/2017.
 */
var config = require('./webpack.config.dev.js');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var path = require('path');

var compiler = webpack(config);
config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
var server = new webpackDevServer(compiler, {
    hot: true,
    clientLogLevel: "info",
    // Control the console log messages shown in the browser when using inline mode. Can be `error`, `warning`, `info` or `none`.
    contentBase: path.resolve('.', 'src'),
    // webpack-dev-middleware options
    quiet: false,
    noInfo: false,
    lazy: false,
    filename: config.output.filename,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    publicPath: config.output.publicPath,
    headers: {"X-Custom-Header": "yes"},
    stats: {
        colors: true,
        progress: true,
        watch: true
    }
});
server.listen(8080, function () {
    console.log('server started on ', "http://locahost:8080");
    console.log("Ctrl + C ", "exit");
});
