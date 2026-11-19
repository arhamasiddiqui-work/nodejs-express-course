import express from "express";
const app = express();
// const logger = require("./logger");
import { middleware } from "./logger.js";
import { auth } from "./auth-midware.js";
// const MidWare = require("./MultipleMid-ware");
// const morgan=require('morgan')   /3rd Party Midware

//req => middleware => res

// app.use([logger, MidWare]);    / our own midware
// app.use(express.static('./public'))    /express midware
//app.use(morgan('tiny))       /third party midware

const port = 3000;
const hostname = "localhost";

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/api/products", (req, res) => {
  res.send("Product Page");
});

// http://localhost:3000/api/items?user=john
app.get("/api/items", [auth, middleware], (req, res) => {
  console.log(req.user);
  res.send(`Items Page, Welcome ${req.user.name}`);
});

app.use((req, res) => {
  res.status(404).send("Error Page not found");
});
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
