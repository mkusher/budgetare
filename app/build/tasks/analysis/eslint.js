var gulp = require("gulp");
var eslint = require("gulp-eslint");

module.exports = function() {
    return function() {
        return gulp.src(["src/**/*.jsx", "src/**/*.js"])
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
    }
}
