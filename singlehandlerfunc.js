// The following example shows a GET /single/handler route with a modular controller that has been moved to its own module (controllers/single-handler.js). This approach separates route definitions from the request-handling logic that generates the endpoint's response.
import express from "express";
import * as controllers from "./controllers/single-handler.js";

const app = express();
const port = 3000;
app.get("/single/handler", controllers.singleHandler);
app.use(controllers.shfMiddleware);

app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});

