// const express = require("express");
// const app = express();

// const people = require("./Routes/people");
// const login = require("./Routes/login");
// //static folder
// app.use(express.static("./methods-public-johndata"));
// //parse(break complex data) form data
// app.use(express.urlencoded({ extended: false }));
// //parse json data
// app.use(express.json());

// app.use("/api/people", people);
// app.use("/login", login);

// app.listen(3000);
// console.log("Server is running on port: https://localhost:3000");

import express from "express";
 import { router as people} from "./routes/people.js";
 import { router as login } from "./routes/login.js";

const app = express();

const port=3000
const host="localhost"
// const people = require("./routes/people");
// const login = require("./Routes/login");

app.use(express.static("./methods-public-johndata"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/people", people );
app.use("/login", login);

app.get("/", (req, res) => {
    res.send("<h1> Welcome to Home Page</h1>");
})

app.listen(port, host, () => {
    console.log(`Server running live at https://${host}:${port}`);
})