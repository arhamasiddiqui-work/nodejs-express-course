const express = require("express");
const app = express();

const people = require("./Routes/people");
const login = require("./Routes/login");
//static folder
app.use(express.static("./methods-public-johndata"));
//parse(break complex data) form data
app.use(express.urlencoded({ extended: false }));
//parse json data
app.use(express.json());

app.use("/api/people", people);
app.use("/login", login);

app.listen(3000);
console.log("Server is running on port: https://localhost:3000");
