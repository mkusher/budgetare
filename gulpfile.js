var config = require('./app/config/build');
var gulp = require('./app/build/')([
    'pack',
    'parameters',
    'watch',
    'analysis:tslint',
    'analysis:eslint',
    'test:mocha',
    'test:mocha:build',
    'test:mocha:watch',
    'test:mocha:run',
    'test:mocha:clean',
    'test:coverage',
    'test:cucumber',
    'test:cucumber:build',
    'test:cucumber:watch',
    'test:cucumber:run'
], config);

gulp.task('init', ['parameters']);

gulp.task('build', ['pack', 'init']);

gulp.task('analysis', ['analysis:eslint', 'analysis:tslint']);

gulp.task('default', ['init', 'watch']);

