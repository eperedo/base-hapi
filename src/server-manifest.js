'use strict';

const serverOptions = require('./server-options');

function createManifest (plugins) {
	const manifest = {
		server: serverOptions,
	};
	if (plugins) {
		manifest.register = { plugins };
	}
	return manifest;
}

module.exports = createManifest;
