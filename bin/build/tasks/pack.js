"use strict";

var gulp = require("gulp");
var webpack = require("webpack");

module.exports = function (config){
    var compiler = webpack(config);
    return function(){
        compiler.run(function(err, stats){
            if(err){
                console.error(err);
            }
        });
        return gulp;
    };
};
