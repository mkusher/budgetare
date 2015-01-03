var baseConfig = require("./webpack.mocha.js");

module.exports = {
    context: baseConfig.context,
    debug: true,
    cache: baseConfig.cache,
    entry: {
    },
    output: baseConfig.output,
    module: {
        loaders: [
            {test: require.resolve("react"), loader: "expose?React"},
            {
                test: /\.spec.tsx?$/,
                loaders: [
                    'babel',
                    'ts-loader?compiler=typescript'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.spec.jsx?$/,
                loaders: [
                    'babel-loader?optional[]=runtime'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                loaders: [
                    'istanbul-instrumenter-loader',
                    'babel',
                    'ts-loader?compiler=typescript'
                ],
                exclude: /(node_modules|\.spec\.jsx?$|\.spec\.tsx?$)/
            },
            {
                test: /\.(jsx?|es6)$/,
                loaders: [
                    'istanbul-instrumenter-loader',
                    'babel'
                ],
                exclude: /(node_modules|\.spec\.js$|\.spec\.ts$)/
            }
        ]
    },
    plugins: baseConfig.plugins,
    resolve: baseConfig.resolve
};
