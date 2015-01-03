var glob = require("glob");
var path = require("path");
var fs = require("fs");
var gutils = require("gulp-util");

exports.glob = function(pattern, build) {
    return new Promise(function(res, rej) {
        glob(pattern, function(er, files){
            if (er) {
                return rej(er);
            }
            files.forEach(function(file){
                var base, relative = base = path.relative(build.context, file);
                build.entry[base] = './' + relative;
            });
            res(files);
        });
    });
};
exports.clean = function(folder) {
    if(fs.existsSync(folder)){
        fs.readdirSync(folder).forEach(function(fileName){
            var file = path.join(folder, fileName);
            if(fs.lstatSync(file).isDirectory()) {
                exports.clean(file);
                fs.rmdirSync(file);
            } else {
                fs.unlinkSync(file);
            }
        });
    }

}
exports.build = function(builder, res, rej) {
    builder(function(err, stats){
        if(!err){
            gutils.log(stats.toString({
                exclude: ['node_modules'],
                colors: true
            }));
            res();
        } else {
            gutils.log(gutils.colors.red(err.stack || err));
            rej(err);
        }
    });
}
exports.run = function(compiler) {
    return new Promise(function(res, rej) {
        exports.build(function(f){ compiler.run(f); }, res, rej);
    });
}
exports.watch = function(compiler, callback) {
    exports.build(function(f){
        compiler.watch(
            {
                aggregateTimeout: 100,
            },
            f
        );
    }, callback, function(){});
}
