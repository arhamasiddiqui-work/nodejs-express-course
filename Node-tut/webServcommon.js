// const http = require("http");

// Add the Node.js HTTP module
import { createServer } from "node:http";

// Specify the hostname and port to run the server
const hostname = "127.0.0.1";
const port = 5000;

// alternative way:
const server = createServer();
server.on("request", (req, res) => {
  res.statusCode = 200;
  res.setHeader("content-type", "text/plain");
  res.end("hello world"); //close the res stream
});

// Create a new Server instance with a requestListener callback
// const server = createServer((req, res) => {
//   res.statusCode  = 200;
//   res.setHeader("content-type", "text/plain");
//   res.end("hello world"); //close the res stream
// })
// .listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// Run the server on the specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
