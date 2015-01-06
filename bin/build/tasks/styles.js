var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var _ = require('underscore');

module.exports = function(config){
    return function(){
        _.each(config, function(value){
            gulp.src(value.src)
                .pipe(concat(value.dest.filename))
                .pipe(minifyCSS())
                .pipe(gulp.dest(value.dest.base));
        });
    }
};