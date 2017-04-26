/**
 * Created by tangjiang on 2017/4/26.
 */
var webpack = require('webpack');
var path = require('path');
const webpackMerge = require('webpack-merge');
var base = function () {
    return {
        entry: {
            app:[
                './front/app.js',
                'webpack-hot-middleware/client?reload=true'
            ]
        },
        output: {
            path: path.join(__dirname,'/www/dist'),
            publicPath: 'dist/',
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
    }
};
module.exports = function() {
    if (process.env.NODE_ENV === 'production') {
        return webpackMerge(base(), {
            output: {
                filename: '[name].bundle.[chunkhash].js',
            },
            devtool:'#source-map',
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
    }else {
        return webpackMerge(base(), {
            output: {
                filename: '[name].[hash].js'
            }
        })
    }
}