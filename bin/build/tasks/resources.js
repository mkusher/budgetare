var gulp = require("gulp");

module.exports = function(config){
    return function(){
        config = config || [];
        config.forEach(function(config){
            gulp.src(config.src)
                .pipe(gulp.dest(config.dest));
        });
    }
};