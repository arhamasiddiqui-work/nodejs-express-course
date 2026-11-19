// Raw Node.js Code VS Express.js Code

// Express.js Code(the most preferred way of handling web requests)
import express from "express";
const port = 3000;
const app = express();
app.get("/", (req, res) => {
  res.send("Welcome to the homepage!");
});
app.get("/books", (req, res) => {
  const books = [{ id: 1, name: "Code React Sweetly" }];
  res.json(books);
});
// middleware, Handles all requests that don't match any defined route and sends a 404 (Not Found) response.
app.use((req, res) => {
  res.status(404).send("Error Page not found");
  // res.end();
});

app.listen(port, () => {
  console.log(`Express server running at https://localhost:${port}`);
});

// // Raw Node.js Code(complex, not preferred way of handling web requests)
// import { createServer } from "node:http";
// const servers = createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Welcome to the homepage!");
//   } else if (req.method === "GET" && req.url === "/books") {
//     const books = [
//       { id: 1, name: "Code React Sweetly" },
//       { id: 2, name: "Creating PNPM Package" },
//     ];
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(books));
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Page not found");
//   }
// });
// servers.listen(port, () => {
//   console.log(`Raw Node server running at http://localhost:${port}`);
// });
