const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

const port = 8080;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Handle termination signals (e.g., Ctrl+C)
process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server closed gracefully.');
    process.exit();
  });
});

//Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    //Application specific logging, throwing an error, or other logic here
});
