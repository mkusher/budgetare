var gulp = require("gulp");
var run = require("./run.js");

module.exports = function (config){
    gulp.task("test:mocha", ["test:mocha:build"], run(config));
};
