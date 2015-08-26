var prod = require("./webpack.prod.js");
var dev = require("./webpack.dev.js");
var test = require("./webpack.test.js");

module.exports = {
    "pack": prod,
    "server": dev,
    "parameters": ["app/config/**/parameters.json.dist"],
    "test": {
        "mocha": {

        },
        "build": test,
        "path": "**/__tests__/*.ts"
    },
    "coverage": {
        "mocha": {
            "reporter": "mocha-lcov-reporter"
        },
        "build": test,
        "path": "**/__tests__/*.ts"
    }
};
