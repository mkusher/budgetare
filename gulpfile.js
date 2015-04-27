var config = require('./app/config/build');
var gulp = require('./bin/build/')([
    'pack',
    'parameters',
    'server',
    'test',
    'coverage'
], config);

gulp.task('init', ['parameters']);

gulp.task('build', ['pack', 'init']);

gulp.task('default', ['init', 'server']);

