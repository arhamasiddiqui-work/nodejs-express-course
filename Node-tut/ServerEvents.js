const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {
  res.end("Welcome to server events");
});
server.listen(5000);
console.log(`Server is listening : https://localhost:5000`);
