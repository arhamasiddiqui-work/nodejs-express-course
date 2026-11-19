// const express = require("express");
import express from "express"
export const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  // console.log(req.body);
  res.status(400).send("Please Provide a Username");
});

// module.exports = router;
