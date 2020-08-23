const { promisify } = require('util');
const copydir = promisify(require('copy-dir'));
const rimraf = promisify(require('rimraf'));
const server = require('node-http-server');
const commandLineArgs = require('command-line-args');
const replaceInFiles = require('replace-in-files');
const opn = require('opn');
const inquirer = require('inquirer');
const shell = require('shelljs');

const optionDefinitions = [
	{
		name: 'port',
		alias: 'o',
		type: Number,
	},
	{
		name: 'content',
		alias: 'c',
		type: String,
	},
	{
		name: 'filter',
		alias: 'f',
		type: String,
	},
];

const options = commandLineArgs(optionDefinitions);

run();

async function run() {
	const { content, port = 8000, filter, target } = options;
	/* const { username, password, host } = await inquirer.prompt([
		{ type: 'input', name: 'username', message: 'User Name:' },
		{ type: 'password', name: 'password', message: 'Password:', mask: '*' },
		{ type: 'input', name: 'host', message: 'Host:' },
	]); */
	const { username, password, host } = { username: 'devpa\\\\asaf.benjamin', password: '2wsx3edC', host: 'https://g2prod.pyramidanalytics.com' }

	console.log('Removing dist folder...');
	await rimraf('./dist');

	console.log('Removed.');

	console.log('Copy files...');
	await copydir('./src', './dist');
	console.log('Copied');

	console.log('Applying parameters');

	await replaceInFiles({
		files: './dist/**/*.*',
		from: /<USERNAME>/g,
		to: username,
	})
		.pipe({
			from: /<PASSWORD>/g,
			to: password,
		})
		.pipe({
			from: /<HOST>/g,
			to: host,
		})
		.pipe({
			from: /<CONTENT>/g,
			to: content,
		})
		.pipe({
			from: /<FILTER>/g,
			to: filter,
		})
		.pipe({
			from: /<TARGET>/g,
			to: target,
		});

		console.log('Compile JS App...')
		shell.cd('dist/embed-js');
		shell.exec('npm i');
		shell.exec('npm run build');
		shell.cd('../..')
		console.log('Done');

	console.log('Compile React App...')
	shell.cd('dist/embed-react');
	shell.exec('npm i');
	shell.exec('npm run build');
	shell.cd('../..')
	console.log('Done');


	console.log('Deploying server...');
	server.deploy(
		{
			port: port,
			root: './dist',
		},
		() => {
			console.log('Listen, Port ' + port);
			opn('http://localhost:' + port);
		}
	);
}
