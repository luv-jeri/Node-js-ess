const http = require('http');

// # http is an object from the file "http" by the node.
// # http contains all the funtions that is required to access the network

const server = http.createServer(function (request, response) {
  console.log('a new request has been made');

  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end('     <h1>Hello World</h1>   <h4>this is h4</h4>     ');
});

server.listen(5763, function () {
  console.log('server is running on port 5763');
});
