import { registerMicroApps } from 'qiankun';

const env = process.env.NODE_ENV;

export function registerMicroApplications(loader) {
    registerMicroApps([{
        name: 'dashboard',
        entry: env === 'production' ? '/dashboard' : '//localhost:30001',
        container: '#content',
        loader,
        activeRule: '#/dashboard',
    }, {
        name: 'management',
        entry: env === 'production' ? '/management' : '//localhost:30002',
        container: '#content',
        loader,
        activeRule: '#/management',
    }]);
}
