import express from "express";
import path from "path";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// StaticView -> contain the final HTML that the server sends to the browser, e.g: 4 files(views) which are made in this folder
const app = express();

const port = 3000;
const host = "localhost";

// Get the directory name of the current file's path:
// dirname() returns a path's directory name.
// fileURLToPath() converts a URL to a valid path string.
// import.meta.url returns the absolute URL of the current file.
const __dirname = dirname(fileURLToPath(import.meta.url));

// Serve static assets (HTML, CSS, images)
app.use(express.static(join(__dirname)));

// Use the index.html static view as a response to 'GET /' requests
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(join(__dirname, "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(join(__dirname, "contact.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(join(__dirname, "404.html"));
});

app.listen(port, host, () => {
  console.log(`SERVER IS LISTENING ON PORT: https://${host}:${port}`);
});
