var gulp = require("gulp");
var webpack = require("webpack");
var gutils = require("gulp-util");

module.exports = function (config){
    var compiler = webpack(config);
    return function(done){
        compiler.run(function(err, stats){
            if(!err){
                gutils.log(stats.toString({
                    exclude: ['node_modules'],
                    colors: true
                }));
                done();
            } else {
                throw err;
            }
        });
        return gulp;
    };
};
