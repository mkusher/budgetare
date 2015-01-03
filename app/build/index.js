var gulp = require('gulp');

module.exports = function(tasks, config){
    tasks.forEach(function(taskName){
        var task = require('./tasks/' + taskName.replace(/\:/g, "/"))(config[taskName] || []);
        // some tasks may define them in gulp by themselfs
        // when they need to specify dependencies for example
        if (task) {
            gulp.task(taskName, task);
        }
    });
    return gulp;
};
