var clean = require("./utils/builder.js").clean;
module.exports = function(folder) {
    return function() {
        clean(folder);
    }
}
