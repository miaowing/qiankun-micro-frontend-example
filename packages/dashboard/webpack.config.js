const path = require('path');
const Config = require('../../config/webpack.config');

const env = process.env.NODE_ENV || 'development';
process.env.APP_HTML = path.resolve(__dirname, 'index.html');
process.env.APP_BUILD = path.resolve(__dirname, '../../build/public/dashboard');

if (env === 'production') {
    process.env.APP_HTML_NAME = path.resolve(__dirname, '../../build/public/dashboard/index.html');
}

const config = Config(env);

config.entry[1] = path.resolve(__dirname, 'dashboard.app.tsx')
config.output.libraryTarget = 'umd';
config.output.library = 'dashboard';
config.output.jsonpFunction = `webpackJsonp_${'@micro-fe/dashboard'}`;
config.output.globalObject = 'window';

module.exports = config;
