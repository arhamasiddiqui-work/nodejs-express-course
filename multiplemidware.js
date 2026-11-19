import express from "express";
const app = express();
const port = 3000;

// Express route with multiple middleware functions
app.get(
  "/multiple/middleware",
  (req, res, next) => {
    console.log("first middleware, passing to the next");
    next();
  },
  (req, res, next) => {
    console.log("second middleware, passing to the next");
    next();
  },
  (req, res) => {
    res.send("Request handled with multiple middleware functions!");
  },
);
// app.use((req, res) => {
//   res.status(404).send("Error Page not found");
// });

// Express route with an array of middleware functions
const arrayOfCallbacks = [callback1, callback2, callback3];
const callback1 = (req, res, next) => {
  console.log("First callback: passing control to next middleware >");
  next();
};
const callback2 = (req, res, next) => {
  console.log("Second callback: passing control to the next middleware >");
  next();
};
const callback3 = (req, res) => {
  res.send("Request handled with an array of middleware functions!");
};
app.get("/array/middleware", arrayOfCallbacks);


app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});
