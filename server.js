const app = require('./app');
const http = require('http');

const port = app.get('port')

http.createServer(app).listen(port, console.log("listening server on port: " + port));