'use strict';

const assert = require('assert');
const glueConfig = require('./server');

(async () => {
	const server = await glueConfig;
	await server.start();
	assert.equal(server.info.port, 4000, 'Default port must be 4000');
	assert.equal(
		server.info.host,
		'localhost',
		'Default host must be http://localhost',
	);
	await server.stop();
})();
