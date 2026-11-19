import { Router } from "express";

export const indexRouter = Router();

indexRouter.use((req, res, next) => {
  console.log("Index Page accessed at ", Date.now());
  next();
});

indexRouter.get("/", (req, res) => {
  res.send("List of all index");
});
indexRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.type("text/plain").send(`Details for index ${id}`);
  // res.type("text/plain").send(`Details for index ${req.params.id}`)
});
// http://localhost:3000/1/draft
indexRouter.get("/:id/draft", (req, res) => {
  const indexId = req.params.id
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
  res.send(`New draft for index ${indexId}`);
});
