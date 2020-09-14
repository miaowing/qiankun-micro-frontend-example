const path = require('path');
const Config = require('../../config/webpack.config');

const env = process.env.NODE_ENV || 'development';
const name = 'dashboard';
const packageName = `@micro-fe/${name}`;

process.env.APP_HTML = path.resolve(__dirname, 'index.html');
process.env.APP_BUILD = path.resolve(__dirname, `../../build/public/${name}`);
process.env.APP_INDEX = path.resolve(__dirname, 'dashboard.app.tsx');

if (env === 'production') {
    process.env.APP_HTML_NAME = path.resolve(__dirname, `../../build/public/${name}/index.html`);
    process.env.PUBLIC_URL = `/${name}`;
}

const config = Config(env);
config.output.libraryTarget = 'umd';
config.output.library = name;
config.output.jsonpFunction = `webpackJsonp_${packageName}`;
config.output.globalObject = 'window';

module.exports = config;
