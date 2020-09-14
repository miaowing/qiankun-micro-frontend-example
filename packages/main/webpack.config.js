const path = require('path');
const Config = require('../../config/webpack.config');

const env = process.env.NODE_ENV || 'development';
const name = 'main';
const packageName = `@micro-fe/${name}`;

process.env.APP_INDEX = path.resolve(__dirname, 'main.app.tsx');
process.env.APP_HTML = path.resolve(__dirname, 'main.html');
process.env.APP_BUILD = path.resolve(__dirname, `../../build/public/${name}`);
process.env.APP_HTML_NAME = env === 'development' ? 'main.html' : path.resolve(__dirname, '../../build/views/index.hbs');
process.env.APP_INDEX = path.resolve(__dirname, 'main.app.tsx');
process.env.PUBLIC_URL = env === 'production' ? `/${name}` : 'http://localhost:30000/';

const config = Config(env);
config.output.libraryTarget = 'umd';
config.output.library = name;
config.output.jsonpFunction = `webpackJsonp_${packageName}`;
config.output.globalObject = 'window';

module.exports = config;
