'use strict';

const assert = require('assert');
const glueConfig = require('./server');

(async () => {
	const server = await glueConfig();
	await server.start();
	assert.equal(server.info.port, 4000, 'Default port must be 4000');
	assert.equal(
		server.info.host,
		'localhost',
		'Default host must be http://localhost',
	);
	await server.stop();
})();

(async () => {
	function validate() {
		return { isValid: true, credentials: { id: 1 } };
	}

	const server = await glueConfig({ validate });

	server.route({
		method: 'GET',
		path: '/private',
		handler(request) {
			return request.auth.credentials.id;
		},
	});

	const { result } = await server.inject({
		url: '/private',
		credentials: { id: 1 },
	});

	const { statusCode } = await server.inject({
		url: '/private',
	});

	assert.equal(
		statusCode,
		401,
		'Request without credentials must return 401 status code',
	);
})();
