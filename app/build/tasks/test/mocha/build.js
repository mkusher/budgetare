var webpack = require("webpack");
var builder = require("./utils/builder");

module.exports = function(config) {
    var build = config.build;
    var pattern = build.context + 'src/' + config.path;
    return function(done) {
        builder.glob(pattern, build).then(function(){
            var compiler = new webpack(build);
            builder.run(compiler).then(function(){
                done();
            });
        });
    };
}
