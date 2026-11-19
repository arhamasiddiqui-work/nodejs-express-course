import { createServer } from "node:http";
// syntax: for node server
// const server = createServer();
// server.listen(port, hostname, backlog, callback)
// server.listen(3000, "localhost", 511, ()=>{
// const info=server.address();
// console.log(`server running at http://${info.address}:${info.port}/`)
// })

// const server = createServer(options, callback);
// const server = createServer(options, (req,res)=>{ });

// listen for a request event:
// const server=createServer(options)
// server.on("request",(req,res)=>{})

// server.on("request", (req, res) => {
//   res.statusCode = 200;
//   res.setHeader("content-type", "text/plain");
//   res.end("hello world"); //close the res stream
// });

// syntax: for express server
// Use Express.js to Configure the Project's Node.js Web Server
import express from "express";

// Create a new Express application instance
const app = express();

// set the port no
const port = 3000;

// create route handler for GET request to "/" path
app.get("/", (req, res) => res.send("Hello from Express.js"));

// run the server
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}/`);
});

