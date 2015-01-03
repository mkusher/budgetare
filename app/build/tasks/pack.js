var gulp = require("gulp");
var webpack = require("webpack");

module.exports = function (config){
    var compiler = webpack(config);
    return function(done){
        compiler.run(function(err, stats){
            if(err){
                console.error(err);
            }
            done();
        });
    };
};
