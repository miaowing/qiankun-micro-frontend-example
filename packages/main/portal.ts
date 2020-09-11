import { registerMicroApps } from 'qiankun';

export function registerMicroApplications(loader) {
    registerMicroApps([{
        name: 'dashboard',
        entry: '//localhost:30001',
        container: '#content',
        loader,
        activeRule: '#/dashboard',
    }]);
}
