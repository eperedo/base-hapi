'use strict';

const Glue = require('glue');
const options = require('./server-options');

function handleFatalError(err) {
	console.log('ZOMG A FATAL ERROR', err);
	process.exit(1);
}

process.on('unhandledRejection', handleFatalError);

process.on('uncaughtException', handleFatalError);

const glueConfig = Glue.compose({
	server: { ...options },
});

module.exports = glueConfig;
