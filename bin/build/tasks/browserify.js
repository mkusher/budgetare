var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

module.exports = function(config){
    return function(){
        config.forEach(function(config){
            var b = browserify(config.src);
            b
                .bundle()
                // log errors if they happen
                .on('error', gutil.log.bind(gutil, 'Browserify Error'))
                .pipe(source(config.filename))
                .pipe(gulp.dest(config.dest));
        });
    }
};