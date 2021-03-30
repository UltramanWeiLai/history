/**
 * @description webpack 公告配置
 * @author weilai
*/
const path = require('path')
const { srcPath } = require('./paths')


module.exports = {
    entry: path.join(srcPath, 'index.js'),
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: srcPath,
                exclude: /node_modules/
            }
        ]
    }
}
