const copydir = require('copy-dir');
const rimraf = require('rimraf');
const server=require('node-http-server');
const commandLineArgs = require('command-line-args')
const replaceInFiles = require('replace-in-files');
const opn = require('opn');

const optionDefinitions = [
    { name: 'username', alias: 'u', type: String },
    { name: 'password',alias:'p', type: String},
    { name: 'host', alias: 'h', type: String },
    { name: 'port', alias: 'o', type: Number }
  ]

const options = commandLineArgs(optionDefinitions);
const port = options.port || 8000;


console.log('Removing dist folder...');
rimraf('./dist',()=>{
    console.log('Removed.');

    console.log('Copy files...');
    copydir('./src', './dist',()=>{
        console.log('Copied');

        console.log('Applying parameters');
        replaceInFiles({
            files:'./dist/**/*.*',
            from: /<USERNAME>/g,
            to:options.username
        });

        replaceInFiles({
            files:'./dist/**/*.*',
            from: /<PASSWORD>/g,
            to:options.password
        });

        replaceInFiles({
            files:'./dist/**/*.*',
            from: /<HOST>/g,
            to:options.host
        });

        console.log('Deploying server...')
        server.deploy({
            port:port,
            root:'./dist',
        },()=>{
            console.log('Listen, Port '+port);
            opn('http://localhost:'+port);
        });
    });
});

