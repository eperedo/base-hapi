'use strict';

const assert = require('assert');
const server = require('./server');

(async () => {
	await server.start();
	assert.equal(server.info.port, 4000, 'Default port must be 4000');
	assert.equal(
		server.info.host,
		'localhost',
		'Default host must be http://localhost'
	);
	await server.stop();
})();
