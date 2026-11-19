// Import the Router function from Express
import { Router } from "express";

// Create a new Express router instance
export const bookRouter = Router();

// Define middleware specific to this router instance
bookRouter.use((req, res, next) => {
  console.log("Book route accessed at: ", Date.now());
  next();
});

// Define routes specific to this router instance:
bookRouter.get("/", (req, res) => {
  res.send("List of All Books");
});
bookRouter.get("/:id", (req, res) => {
  // const id = req.params.id;
  const { id } = req.params;
  res.type("text/plain").send(`Details for book ${id}`);
});
bookRouter.get("/:id/draft", (req, res) => {
  // Escape the ID before inserting it into HTML text
  const id = req.params.id
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
  res.send(`New draft for book ${id}`);
});


// running via server.js file