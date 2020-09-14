import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestLogger } from '@nestcloud/logger';
import { BOOT, IBoot } from '@nestcloud/common';
import { resolve } from 'path';
import { NestExpressApplication } from "@nestjs/platform-express";

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
        app.setBaseViewsDir(resolve(__dirname, '../../.webpack/'));
    }

    handleStop(app);

    const boot = app.get<IBoot>(BOOT);
    await app.listen(boot.get('service.port', 3000));
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
