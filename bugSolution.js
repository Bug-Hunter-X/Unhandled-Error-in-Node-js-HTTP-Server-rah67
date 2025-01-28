const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080, (err) => {
  if (err) {
    console.error('Failed to start server:', err);
    // Add more robust error handling as needed
    // Example: Exit the process or try a different port
    process.exit(1);
  } else {
    console.log('Server is listening on port 8080');
  }
});