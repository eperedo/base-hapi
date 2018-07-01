'use strict';

const raven = require('./raven');

async function preRegister(server) {
	await server.register(raven);
	server.ext('onPreResponse', request => {
		server.plugins['hapi-raven'].client.setContext({
			user: request.auth.credentials,
		});
		if (request.response.isBoom && request.response.output.statusCode === 400) {
			server.plugins['hapi-raven'].client.captureException(request.response, {
				extra: {
					query: request.query,
					payload: request.payload,
					params: request.params,
					response: request.response,
				},
				level: 'warning',
				tags: {
					statusCode: 400,
				},
			});
		}
		return request.response;
	});
}

module.exports = preRegister;
