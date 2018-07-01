'use strict';

const Glue = require('glue');
const options = require('./server-options');
const preRegister = require('./pre-register');

function handleFatalError(err) {
	console.log('ZOMG A FATAL ERROR', err);
	process.exit(1);
}

process.on('unhandledRejection', handleFatalError);

process.on('uncaughtException', handleFatalError);

function createConfiguration(configuration = {}) {
	const glueConfig = Glue.compose(
		{
			server: { ...options },
		},
		{
			preRegister: preRegister(configuration),
		},
	);
	return glueConfig;
}

module.exports = createConfiguration;
