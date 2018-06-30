'use strict';

const Hapi = require('hapi');
const catboxRedis = require('catbox-redis');

const options = {
	host: process.env.HOST || 'localhost',
	port: process.env.PORT || 4000,
	routes: {
		cors: true,
	},
	cache: [
		{
			name: process.env.CATBOX_REDIS_NAME || 'catbox-redis',
			engine: catboxRedis,
			partition: process.env.CATBOX_PARTITION_NAME || 'cache',
			host: process.env.REDIS_HOST || 'localhost',
			port: process.env.REDIST_PORT || 6379,
		},
	],
};

const server = new Hapi.Server({ ...options });

function handleFatalError(err) {
	console.log('ZOMG A FATAL ERROR', err);
	process.exit(1);
}

process.on('unhandledRejection', handleFatalError);

process.on('uncaughtException', handleFatalError);

module.exports = server;
