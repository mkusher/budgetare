var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var _ = require("lodash");

module.exports = function(config){
    return function(){
        config = {
            watch: config.watch || [],
            watchify: config.watchify || []
        };
        config.watch.forEach(function(task){
            gulp.watch(task.src, [task.name]);
        });
        config.watchify.forEach(function(task){
            var bundler = watchify(browserify(task.src, watchify.args));

            bundler.on('update', rebundle);

            function rebundle() {
                gutil.log("Browserify rebundle...");
                return bundler.bundle()
                    // log errors if they happen
                    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
                    .pipe(source(task.filename))
                    .pipe(buffer())
                    //.pipe(uglify())
                    .pipe(gulp.dest(task.dest));
            }

            return rebundle();
        })
    }
};