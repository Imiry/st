/*
 * @Author: sitao
 * @Date: 2020-12-31 14:13:09
 * @LastEditors: sitao
 * @LastEditTime: 2020-12-31 14:34:42
 */
const path = require('path')

module.exports = {

  //入口文件
  entry: './src/index.js',
  //输出文件
  output: {
    publicPath: 'xuni', //虚拟打包路径，就是说文件夹不会真正的生成，而是在8080端口虚拟生成
    filename:'bundle.js', //打包出来的文件名
  },
  devServer: {
    port:8080,
    contentBase: 'www'   //静态资源文件夹
  }
};