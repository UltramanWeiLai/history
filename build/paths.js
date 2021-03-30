/**
 * @description 路径
 * @author weilai
*/

const path = require('path')

const srcPath = path.join(__dirname, '../', 'src')
const distPath = path.join(__dirname, '../', 'dist')
const examplesPath = path.join(__dirname, '../', 'examplesPath')

module.exports = {
    srcPath,
    distPath,
    examplesPath
}
