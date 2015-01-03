var gulp = require('gulp');
var karma = require('karma');

module.exports = function(config){
    return function(){
        var karma = require("karma").server;
        gulp.task('test', function (done) {
            karma.start(config, done);
        });
    };
};