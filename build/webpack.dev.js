/**
 * @description webpack 开发环境
 * @author weilai
*/
const path = require('path')

const webpack = require('webpack')
const webpackCommon = require('./webpack.common')
const { merge } = require('webpack-merge')

const { srcPath, distPath, examplesPath } = require('./paths')

module.exports = merge(webpackCommon, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: ' history.js',
        path: distPath,
    },
    plugins: [
        new webpack.DefinePlugin({
            ENV: JSON.stringify('development')
        })
    ],
    devServer: {
        port: 9999,
        compress: true,
        contentBase: examplesPath,
    }
})
