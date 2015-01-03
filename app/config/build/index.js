var prod = require("./webpack.prod.js");
var dev = require("./webpack.dev.js");
var mocha = require("./webpack.mocha.js");
var coverage = require("./webpack.coverage.js");
var cucumber = require("./webpack.cucumber.js");

var specsPath = "**/*.spec.?(ts|js|tsx|jsx)";
var mochaOpts = [];
var cucumberOpts = [
    "features",
    "--format",
    "pretty"
];

module.exports = {
    "pack": prod,
    "watch": dev,
    "parameters": ["app/config/**/parameters.json.dist"],
    "test:mocha": {
        "opts": {},
        "path": mocha.output.path
    },
    "test:mocha:run": {
        "opts": {},
        "path": mocha.output.path
    },
    "test:mocha:build": {
        "build": mocha,
        "path": specsPath
    },
    "test:mocha:watch": {
        "build": mocha,
        "path": specsPath
    },
    "test:mocha:clean": mocha.output.path,
    "test:coverage": {
        "opts": {},
        "build": coverage,
        "path": specsPath
    },
    "test:cucumber": {
        "opts": cucumberOpts,
        "rootDir": cucumber.context
    },
    "test:cucumber:run": {
        "opts": cucumberOpts,
        "rootDir": cucumber.context
    },
    "test:cucumber:build": cucumber,
    "test:cucumber:watch": cucumber
};
