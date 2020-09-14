const path = require('path');
const argRE = /--(\w+)=(\w+)/;

exports.apps = [
    'server',
    'main',
    'dashboard',
    'management',
]

exports.getApp = (argv) => {
    if (!argv) {
        return;
    }

    const args = {};
    argv.filter(arg => arg.startsWith('--')).forEach(arg => {
        arg = arg.replace(/ /g, '');
        const matches = argRE.exec(arg);
        if (matches) {
            args[matches[1]] = matches[2];
        }
    });

    const app = args.app;

    return {
        path: path.resolve(__dirname, '../packages/' + app || 'main'),
        port: args.port,
        app,
    };
}
