const baseConfig = require('./webpack.base.js');
const merge = require('webpack-merge');

const prodConfig = {
    mode: "production", //生产模式
}

module.exports = merge(baseConfig, prodConfig); //合并baseConfig和prodConfig模块