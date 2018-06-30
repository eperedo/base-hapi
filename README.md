# base-hapi

> A base hapi configuration for my new API projects

### Usage

```javascript
const server = require('base-hapi');

(async () => {
	await server.start();
	console.log(`Server started at ${server.info.uri}`);
	// server started at http://localhost:4000
})();
```

If you want to change the HOST and PORT you can do it by setting up two variable environments

```bash
HOST=192.168.1.25
PORT=2000
```

### Configuration

Out of the box base-hapi comes with many defaults:

1.  Catbox Redis with the following configuration

```javascript
{
  name: process.env.CATBOX_REDIS_NAME || 'catbox-redis',
  // engine: require(catbox-redis),
  partition: process.env.CATBOX_PARTITION_NAME || 'cache',
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIST_PORT || 6379,
},
```
