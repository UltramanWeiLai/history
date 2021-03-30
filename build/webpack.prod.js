/**
 * @description webpack 生产环境
 * @author weilai
*/
const path = require('path')

const webpack = require('webpack')
const webpackCommon = require('./webpack.common')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const { distPath } = require('./paths')

module.exports = merge(webpackCommon, {
    mode: 'production',
    output: {
        filename: ' history.js',
        path: distPath,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            ENV: JSON.stringify('production')
        })
    ]
})
