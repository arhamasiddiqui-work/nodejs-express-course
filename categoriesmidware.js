import express from "express";
import cors from "cors";

// Application-level middleware: attached to app instance
const app = express();
app.get("/profile", (req, res, next) => {
  console.log("Hi, there!");
  next();
});

// Router-level middleware: attached to Express-Router instance (router).usually done in a separate routes file
const router = express.Router();
router.get("profile", (req, res, next) => {
  console.log("Hi, there!");
  next();
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Error 500: Encountered an unexpected erro");
});

// Built-in middleware
express.static("public")
express.json()
express.urlencoded()

// Third-party middleware
app.use(cors())