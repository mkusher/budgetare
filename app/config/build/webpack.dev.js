var confTemplate = require("./webpack.js");
var webpack = require("webpack");
var _ = require("lodash");

conf = _.cloneDeep(confTemplate);

conf.devtool = "eval";
conf.debug = true;
conf.entry.unshift('webpack/hot/dev-server');
conf.module.loaders[0].loaders.unshift('react-hot');
conf.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
];

module.exports = conf;
