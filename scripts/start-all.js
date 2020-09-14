const process = require('child_process');
const appConfig = require('../config/apps');

function getLabels() {
    let labels = '';
    appConfig.apps.forEach(app => {
        labels += `${app},`;
    });
    return labels.substr(0, labels.length - 1);
}

function getNPMCommands() {
    const commands = [];
    appConfig.apps.forEach(app => {
        commands.push(`npm run start:${app}`);
    });
    return commands;
}

const params = ['-n', getLabels()].concat(getNPMCommands());
const result = process.spawn('concurrently', params);
result.stdout.on('data', (data) => {
    console.log(data.toString());
});

result.stderr.on('data', (data) => {
    console.error(data.toString());
});

result.on('close', (code) => {
    console.log(`Exit(${code})`);
});
