const express = require("express");
const app = express();
const logger = require("./logger");
const MidWare=require('./MultipleMid-ware')
// const morgan=require('morgan')   /3rd Party Midware

//req => middleware => res

// app.use([logger, MidWare]);    / our own midware
// app.use(express.static('./public'))    /express midware
//app.use(morgan('tiny))       /third party midware


app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/api/products", (req, res) => {
  res.send("Product Page");
});

app.get("/api/items",[logger, MidWare] ,(req, res) => {
  console.log(req.user);
  res.send("Items Page");
});

app.listen(3000);
console.log("Server is running on port: https://localhost:3000");
