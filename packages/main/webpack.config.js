const path = require('path');
const Config = require('../../config/webpack.config');

const env = process.env.NODE_ENV || 'development';
process.env.APP_INDEX = path.resolve(__dirname, 'main.app.tsx');
process.env.APP_HTML = path.resolve(__dirname, 'main.html');
process.env.APP_BUILD = path.resolve(__dirname, '../../build/public/main');
process.env.APP_HTML_NAME = env === 'development' ? 'main.html' : path.resolve(__dirname, '../../build/views/index.hbs');

const config = Config(env);

config.entry[1] = path.resolve(__dirname, 'main.app.tsx')
config.output.libraryTarget = 'umd';
config.output.library = 'main';
config.output.jsonpFunction = `webpackJsonp_${'@micro-fe/main'}`;
config.output.globalObject = 'window';

module.exports = config;
