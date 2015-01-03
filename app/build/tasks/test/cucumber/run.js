var path = require("path");
var spawn = require("child_process").spawn;

module.exports = function(config){
    return function(done) {
        var proc = spawn(
            path.join(
                config.rootDir,
                "node_modules/cucumber/bin/cucumber.js"
            ),
            config.opts
        );
        proc.stdout.on('data', function(data){
            process.stdout.write(data.toString());
        });
        proc.stderr.on('data', function(data){
            process.stderr.write(data.toString());
        });
        proc.on('close', function(code){
            done();
            process.exit(code);
        });
    }
}
