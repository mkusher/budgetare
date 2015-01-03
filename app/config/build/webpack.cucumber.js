var webpack = require("webpack");
var path = require("path");
var _ = require("lodash");
var conf = _.cloneDeep(require("./webpack.js"));

module.exports = {
    context: path.join(__dirname, '../../../'),
    cache: {},
    debug: false,
    target: "node",
    entry: "./features/steps/all-steps.es6",
    output: {
        library: "cucumber",
        libraryTarget: "commonjs2",
        path: path.join(__dirname, "../../../features/build/"),
        filename: '[name].test.js',
        chunkname: '[id].test.js'
    },
    module: {
        loaders: [
            { test: require.resolve("react"), loader: "expose?React" },
            {
                test: /\.tsx?$/,
                loaders: [
                    'babel',
                    'ts-loader?compiler=typescript'
                ],
                exclude: /node_modules/
            },
            {
                test: /(\.jsx?|\.es6)$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loaders: ['json-loader']
            }
        ]
    },
    plugins: [
    ],
    node: {
        __dirname: true,
    },
    resolve: conf.resolve
};
