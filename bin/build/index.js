var gulp = require('gulp');

module.exports = function(tasks, config){
    tasks.forEach(function(taskName){
        gulp.task(taskName, require('./tasks/' + taskName)(config[taskName] || []));
    });
    return gulp;
};