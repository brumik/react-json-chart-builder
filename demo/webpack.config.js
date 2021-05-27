/* eslint-disable */
const { resolve } = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    context: __dirname,
    devServer: {
        contentBase: resolve(__dirname, './dist')
    },
    entry: {
        'demo': resolve(__dirname, './src/index.tsx')
    },
    devtool: 'source-map',
    output: {
        path: resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new HtmlWebPackPlugin({
            template: './public/favicon.ico',
            filename: './favicon.ico',
            minify: false
        }),
        new CopyPlugin({
            patterns: [
                { from: 'api', to: 'api' }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(ts|tsx)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ]
    },
    resolve: {extensions: ['.js', '.ts','.tsx', '.css']}
};
