var gulp = require("gulp");
var webpack = require("webpack");
var gutils = require("gulp-util");

module.exports = function (config){
    var compiler = webpack(config);
    return function(){
        compiler.watch({
            aggregateTimeout: 100
        }, function(err, stats){
            if(!err){
                gutils.log(stats.toString({
                    exclude: ['node_modules'],
                    colors: true
                }));
                gutils.log(gutils.colors.green("Features are ready"));
            } else {
                gutils.log(gutils.colors.red(err));
            }
        });
        return gulp;
    };
};
