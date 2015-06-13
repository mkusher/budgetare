"use strict";

var path = require("path");
var webpack = require("webpack");

module.exports = {
    context: path.join(__dirname, '../../../'),
    entry: [
        "./src/index.js"
    ],
    output: {
        path: path.join(__dirname, "../../../public/"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader?library=es6',
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.png$/, loader: "file-loader"},
            {test: /\.gif$/, loader: "file-loader"},
            {test: /\.jpe?g$/, loader: "file-loader"},
            {test: /\.eot$/, loader: "file-loader"},
            {test: /\.woff2?$/, loader: "file-loader"},
            {test: /\.ttf$/, loader: "file-loader"},
            {test: /\.svg$/, loader: "file-loader"}
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        alias: {
            "domain": path.join(__dirname, "../../../src/domain")
        },
        extensions: ['', '.ts', '.js', '.jsx', '.styl']
    }
};
