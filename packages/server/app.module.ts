import { Module } from '@nestjs/common';
import { BootModule } from '@nestcloud/boot';
import { ConfigModule } from '@nestcloud/config';
import { ServiceModule } from '@nestcloud/service';
import { LoadbalanceModule } from '@nestcloud/loadbalance';
import { HttpModule } from '@nestcloud/http';
import { EtcdModule } from '@nestcloud/etcd';
import { BOOT, ETCD, LOADBALANCE, components } from '@nestcloud/common';
import { TerminusModule } from '@nestjs/terminus';
import { ProxyModule } from '@nestcloud/proxy';
import * as controllers from './controllers';
import { LoggerModule } from '@nestcloud/logger';
import { resolve } from 'path';

@Module({
    imports: [
        LoggerModule.forRoot(),
        BootModule.forRoot({
            filePath: resolve(__dirname, './config.yaml'),
        }),
        EtcdModule.forRootAsync({ inject: [BOOT] }),
        ConfigModule.forRootAsync({ inject: [BOOT, ETCD] }),
        ServiceModule.forRootAsync({ inject: [BOOT, ETCD] }),
        LoadbalanceModule.forRootAsync({ inject: [BOOT] }),
        HttpModule.forRootAsync({ inject: [BOOT, LOADBALANCE] }),
        ProxyModule.forRootAsync({ inject: [BOOT, LOADBALANCE] }),
        TerminusModule.forRootAsync({
            useFactory: () => ({
                endpoints: [{ url: '/health', healthIndicators: [] }],
            }),
        }),
    ],
    controllers: components(controllers),
})
export class AppModule {
}
