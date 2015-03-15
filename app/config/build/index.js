var prod = require("./webpack.prod.js");
var dev = require("./webpack.dev.js");

module.exports = {
    "pack": prod,
    "server": dev,
    "parameters": ["app/config/**/parameters.json.dist"]
}
