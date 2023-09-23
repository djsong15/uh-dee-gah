const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const Dotenv = require('dotenv');
const env = Dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((acc, cv) => {
    acc[`process.env.${cv}`] = JSON.stringify(env[cv]);
    return acc;
}, {});

module.exports = {
    entry: {
        src: './client/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './client/index.html'
        }),
        new webpack.DefinePlugin(envKeys)
    ],
    devServer: {
        static: {
            publicPath: '/dist',
            directory: path.join(__dirname, 'dist')
        },
        proxy: {
            '/api': 'localhost:3000'
        },
        historyApiFallback: true
    },
    devtool: 'source-map'
};