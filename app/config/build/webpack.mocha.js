var webpack = require("webpack");
var path = require("path");
var _ = require("lodash");
var baseConfig = _.cloneDeep(require("./webpack.js"));

module.exports = {
    context: path.join(__dirname, '../../../'),
    debug: false,
    cache: {},
    entry: {
    },
    output: {
        path: path.join(__dirname, "../../runtime/tmp/"),
        filename: '[name].js',
        chunkname: '[id].js'
    },
    module: {
        loaders: [
            {test: require.resolve("react"), loader: "expose?React"},
            {
                test: /\.tsx?$/,
                loaders: [
                    'babel',
                    'ts-loader?compiler=typescript'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(jsx?|es6)$/,
                loaders: [
                    'babel'
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    resolve: baseConfig.resolve
};
