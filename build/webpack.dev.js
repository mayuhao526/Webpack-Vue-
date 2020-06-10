const baseConfig = require('./webpack.base.js');
const merge = require('webpack-merge');
const webpack = require('webpack');
const devConfig = {
    mode: "development", // 开发模式
    devtool: 'cheap-module-eval-source-map', // 压缩的js和原js之间建立映射关系 便于纠错
    devServer: {
        // 指定服务器根目录
        contentBase: './dist',
        // 自动打开浏览器
        open: true,
        // 开启热模块替换
        hot: true

    },
    // 插件
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge(baseConfig, devConfig); //合并baseConfig和devConfig模块