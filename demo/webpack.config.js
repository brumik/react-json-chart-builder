/* eslint-disable */
const { resolve } = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {
    context: __dirname,
    devServer: {
        static: {
           directory: resolve(__dirname, './dist')
        },
        historyApiFallback: true,
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
            favicon: './public/favicon.ico',
            filename: './index.html',
            template: './public/index.html'
        }),
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
            },
            {
                test: /\.(?:png|jpg|svg)$/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {extensions: ['.js', '.ts','.tsx', '.css']}
};
