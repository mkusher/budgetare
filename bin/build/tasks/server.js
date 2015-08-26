"use strict";

var gulp = require("gulp");
var path = require("path");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

module.exports = function (config){
    var compiler = webpack(config);
    return function(){
        new WebpackDevServer(compiler, {
            hot: true,
            inline: true,
            historyApiFallback: true,
            stats: { colors: true },
            contentBase: path.join(__dirname, "../../../public/")
        }).listen(3100, "localhost", function(err) {
            if(err) throw new gutil.PluginError("webpack-dev-server", err);
            // Server listening
            gutil.log("[webpack-dev-server]", "http://localhost:3100/");
        });
        return gulp;
    };
};
