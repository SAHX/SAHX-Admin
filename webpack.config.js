/**
 * Created by tangjiang on 16/3/14.
 */
var webpack = require('webpack');

module.exports = {
    entry: {
        app:'./front/app.js'
    },
    output: {
        path: './www/dist',
        publicPath: 'dist/',// 网站访问目录,打包后的文件可以通过[http://地址/dist/a.js]访问
        filename: '[name].js'
    },
    module: {
        // avoid webpack trying to shim process
        noParse: /es6-promise\.js$/,
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                // excluding some local linked packages.
                // for normal use cases only node_modules is needed.
                exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                loader: 'babel'
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, loader: "file-loader" }
        ]
    },
    plugins:[
        //new webpack.optimize.UglifyJsPlugin({
        //        compress: {
        //            warnings: false
        //        }
        //})
    ],
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }

}
module.exports.devtool = '#source-map'


if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vuejs.github.io/vue-loader/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ])
}
