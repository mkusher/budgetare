var path = require("path");
var Mocha = require("mocha");
var glob = require("glob");

module.exports = function(config) {
    return function(done) {
        require("./utils/globals");
        var mocha = new Mocha(config.opts);
        var specs = path.join(config.path, "**/*.js");
        glob(specs, function(err, files) {
            if (err) {
                throw err;
            }
            files.forEach(function(file) {
                mocha.addFile(
                    file
                );
            });
            mocha.run(function(){
                done();
            });
        });
    };
}
