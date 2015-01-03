var gulp = require("gulp");
var istanbul = require("istanbul");
var run = require("./mocha/run");
var build = require("./mocha/build");

function GenerateCoverageOutput() {
    var sync = true, coverageVar = "__coverage__",
        collector = new istanbul.Collector(),
        reporter = new istanbul.Reporter();
    collector.add(global[coverageVar]);
    reporter.addAll(["html", "lcov", "text-summary"]);
    reporter.write(collector, sync, function() {});
}

module.exports = function (config){
    gulp.task("test:coverage:build", ["test:mocha:clean"], build(config));
    gulp.task("test:coverage", ["test:coverage:build"], function(done) {
        run({
            opts: config.opts,
            path: config.build.output.path
        })(function() {
            GenerateCoverageOutput();
            done();
        });
    });
};
