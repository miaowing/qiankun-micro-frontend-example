import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestLogger } from '@nestcloud/logger';
import { BOOT, IBoot } from '@nestcloud/common';
import { resolve } from 'path';
import { NestExpressApplication } from "@nestjs/platform-express";
import { writeFileSync } from "fs";

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
        logger: new NestLogger({
            filePath: resolve(__dirname, './config.yaml'),
        }),
    });
    app.setBaseViewsDir(resolve(__dirname, './views'));
    app.setViewEngine('hbs');
    app.useStaticAssets(resolve(__dirname, './public'));

    if (process.env.NODE_ENV !== 'production') {
        compile(app);
    }

    handleStop(app);

    const boot = app.get<IBoot>(BOOT);
    await app.listen(boot.get('service.port', 3000));
}

function compile(app) {
    app.useStaticAssets(resolve(__dirname, './assets'));
    app.setBaseViewsDir(resolve(__dirname, '../../.webpack/'));
    const webpack = require('webpack');
    const devMiddleware = require('webpack-dev-middleware');
    const hotMiddleware = require('webpack-hot-middleware');
    const config = require('../main/webpack.config');
    const compiler = webpack(config);
    compiler.plugin('emit', (compilation, callback) => {
        const assets = compilation.assets;
        let file, data;
        Object.keys(assets).forEach(key => {
            if (key.match(/main\.html/)) {
                file = resolve(__dirname, '../../.webpack/index.hbs');
                data = assets[key].source();
                writeFileSync(file, data);
            }
        });
        callback();
    });

    app.use(devMiddleware(compiler, { hot: true, publicPath: config.output.publicPath }));
    app.use(hotMiddleware(compiler));
}

function handleStop(app) {
    process.on('SIGINT', async () => {
        setTimeout(() => process.exit(1), 5000);
        await app.close();
        process.exit(0);
    });

    // kill -15
    process.on('SIGTERM', async () => {
        setTimeout(() => process.exit(1), 5000);
        await app.close();
        process.exit(0);
    });
}

bootstrap();
