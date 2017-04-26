import webpackDevMiddleware from 'think-webpack-dev-middleware';
import webpackHotMiddleware from 'think-webpack-hot-middleware';
import webpack from 'webpack';
import config from '../../../webpack.config.js';

const compiler = webpack(config);

think.middleware('webpack-dev', webpackDevMiddleware(
    compiler,
    {
        stat: { color: true }
    }
));

think.middleware('webpack-hot', webpackHotMiddleware(
    compiler,
    {
        log: think.log
    }
))