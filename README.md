# Node.js Server Resource Leak

This repository demonstrates a common issue in Node.js applications: improper server shutdown leading to resource leaks. The `bug.js` file contains a server that doesn't gracefully handle termination, while `bugSolution.js` provides a corrected version.

## Problem

The `process.exit()` call abruptly terminates the Node.js process without allowing the HTTP server to close its connections properly. This can lead to resource leaks and unexpected behavior.

## Solution

The solution involves using the `server.close()` method to gracefully shut down the server before exiting.  This ensures that all pending requests are processed and resources are released before the program terminates.