'use strict';

const Hapi = require('hapi');

const options = {
	host: process.env.HOST || 'localhost',
	port: process.env.PORT || 4000,
	routes: {
		cors: true,
	},
};

const server = new Hapi.Server({ ...options });

function handleFatalError(err) {
	console.log('ZOMG A FATAL ERROR', err);
	process.exit(1);
}

process.on('unhandledRejection', handleFatalError);

process.on('uncaughtException', handleFatalError);

module.exports = server;
