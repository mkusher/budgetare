var confTemplate = require("./webpack.js");
var webpack = require("webpack");
var _ = require("lodash");

var conf = _.cloneDeep(confTemplate);

conf.devtool = "eval";
conf.debug = true;
conf.entry.unshift("webpack-dev-server/client?http://localhost:3100", "webpack/hot/dev-server");
conf.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
];

module.exports = conf;
