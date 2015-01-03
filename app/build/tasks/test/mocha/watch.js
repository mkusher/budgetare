var webpack = require("webpack");
var builder = require("./utils/builder");
var gutils = require("gulp-util");

module.exports = function(config) {
    var build = config.build;
    var pattern = build.context + 'src/' + config.path;
    return function(done) {
        builder.glob(pattern, build).then(function(){
            var compiler = new webpack(build);
            builder.watch(compiler, function(){
                gutils.log(gutils.colors.green("Specs are ready"));
            });
            done();
        });
    };
}
