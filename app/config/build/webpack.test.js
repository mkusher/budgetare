var confTemplate = require("./webpack.js");
var webpack = require("webpack");
var _ = require("lodash");
var path = require("path");

conf = _.cloneDeep(confTemplate);

conf.debug = true;
conf.plugins = [
    new webpack.NoErrorsPlugin()
];
conf.entry = {};
conf.output = {
    path: path.join(__dirname, "../../runtime/tmp/"),
    filename: '[name].test.js',
    chunkname: '[id].test.js'
}

module.exports = conf;
