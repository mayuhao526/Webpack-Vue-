/* 导入模块 */
const path = require("path");
const VueloaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //这里利用ES6解构语法提取构造函数

/* 导出配置 */
module.exports = {
    resolve: { // 解决runtime问题 设置别名
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },

    // 项目打包入口文件entry
    entry: "./src/main.js",
    // 打包出口文件output
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../dist') //设置打包后的路径
    },
    // 打包规则
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.(jpg|jpeg|png|svg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]', // 命名格式：文件名.格式
                    limit: 2048 // 限制2048b之内采用base64压缩
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] // 自右向左解析 先由css-loader统一为css文件 再交由style-loader挂载于head标签中
            }, {
                test: /\.styl(us)?$/, // 可能是styl或stylus的后缀 这里做了匹配
                use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'stylus-loader'] // 这里用styl sass和less同理
            }, {
                test: /\.js$/,
                exclude: /node_modules/, // 除了库中文件 项目中其余js皆将ES6语法转化ES5
                loader: "babel-loader"
            }
        ]
    },
    // 对插件实例化
    plugins: [
        new VueloaderPlugin(), // vue插件
        new HtmlWebpackPlugin({
            template: './index.html' // 在dist目录下自动生成原html文件
        }),
        new CleanWebpackPlugin() // 清空之前导入的文件
    ]
}