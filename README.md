# base-hapi

> A base hapi configuration for my new API projects

### Usage

```javascript
const server = require('base-hapi');

async () => {
	await server.start();
	console.log(`Server started at ${server.info.uri}`);
	// server started at http://localhost:4000
};
```

If you want to change the HOST and PORT you can do it by setting up two variable environments

```bash
HOST=192.168.1.25
PORT=2000
```
