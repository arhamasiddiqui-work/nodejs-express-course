// Add the Express module
import express, { Router } from "express";

// Create a new Express application instance
const app = express();

const port = 3000;
const host = "localhost";

// Create a new Express router instance
// to let a child router inherit the parent router's params, set mergeParams to true
const bookRouter = Router({ mergeParams: true });

// Define a sub-route
bookRouter.get("/book/:bookId", (req, res) => {
  const topic = req.params.topic; // "CSS" for the URL below
  const bookId = req.params.bookId;
  res.json({ topic, bookId });
});

// Define a parent route
app.use("/codesweetly/:topic", bookRouter);

// Run the server on the specified port and host
// const server = app.listen(3000, "127.0.0.1", () => {
//   const { host, port } = server.address();
//   console.log(`Server running live at http://${host}:${port}!`);
// });
app.listen(port, host, () => {
  console.log(`Server running live at http://${host}:${port}!`);
});
