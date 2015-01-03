var config = require('./app/config/gulp');
var gulp = require('./bin/build/')([
    'browserify',
    'resources',
    'test',
    'watch'
], config);

gulp.task('init', ['resources']);

gulp.task('build', ['browserify', 'init']);

gulp.task('default', ['init', 'watch']);

