/**
 * Created by tangjiang on 2017/4/26.
 */
var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var base = {
    entry: {
        app: './front/app.js',
        vendor: 'moment'
    },
    output: {
        path: path.join(__dirname, '/www/dist'),
        publicPath: '/dist/',
        filename: '[name].[chunkhash].js',
        sourceMapFilename: '[name].map'
    },
    module: {
        loaders: [
            {
                test: /\.vue/,
                loaders: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders: ['to-string-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'] // 指定公共 bundle 的名字。
        }),
        new HtmlWebpackPlugin({  // 自动生成包含新的打包文件路径的html文件
            filename: path.join(__dirname, '/view/home/index_index.html'), // 输出html文件到 thinkjs view（视图）对应的home模块下
            template: 'view/home/webpack_template.html'
        })
    ]
};

if (process.env.NODE_ENV === 'production') {
    module.exports = webpackMerge(base, {
        output: {
            filename: '[name].[chunkhash].js',
        },
        devtool: '#source-map',
        plugins: [
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    screw_ie8: true,
                    warnings: false
                },
                comments: false
            })
        ]
    })
} else {
    module.exports = webpackMerge(base, {
        output: {
            filename: '[name].[hash].js'
        },
        devtool: "cheap-eval-source-map"
    })
}
