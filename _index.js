// Web Server Using Core NodeJS
// import http-web-server node.js core package;
const http = require('http');

// Create the webserver event handler
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('<h1>Hello from NodeJS Application as html</h1>');
});

// Start the server
server.listen(3000);

console.log('Server running at http://localhost:3000');