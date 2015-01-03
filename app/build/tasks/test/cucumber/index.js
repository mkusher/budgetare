var gulp = require("gulp");
var run = require("./run.js");

module.exports = function(config) {
    gulp.task("test:cucumber", ["test:cucumber:build"], run(config));
}
