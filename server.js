import express from "express";
import { indexRouter } from "./routes/index.js";
import { bookRouter } from "./routes/books.js";

const app = express();

const host = "localhost";
const port = 3000;

// Mount bookRouter at /books and its subpaths
app.use("/books", bookRouter)
// Mount indexRouter at /
app.use("/", indexRouter)

app.listen(port,host,()=>{
    console.log(`Server running at http://${host}:${port}/`);
})