var gulp = require("gulp");
var tslint = require("gulp-tslint");

module.exports = function() {
    return function() {
        return gulp.src(["src/**/*.tsx", "src/**/*.ts"])
            .pipe(tslint())
            .pipe(tslint.report("verbose"));
    }
}
