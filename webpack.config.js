const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: path.join(__dirname + "/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader", // creates style nodes from JS string
            }, {
                loader: "css-loader", // translates CSS into CommonJS
                options: {
                    importLoaders: 1,
                }
            }, {
                loader: "postcss-loader",
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["env"]
                }
            }
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                }
            ]
        }]
    }, devServer: {
        contentBase: path.join(__dirname, '/dist'),
    }, plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
};