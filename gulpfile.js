var config = require('./app/config/build');
var gulp = require('./bin/build/')([
    'pack',
    'parameters',
    'server',
    'test'
], config);

gulp.task('init', ['parameters']);

gulp.task('build', ['pack', 'init']);

gulp.task('default', ['init', 'server']);

