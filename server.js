const app = require('./app');
const http = require('http');

const server = http.createServer(app);
const port = app.get('port')

server.listen(port, console.log("listening server on port: " + port));