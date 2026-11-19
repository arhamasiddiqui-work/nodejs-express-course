// const express = require("express");
import express from "express";
export const router = express.Router();

// const { people } = require("../dataJohnProducts");
// import { people } from "../dataJohnProducts.js";

import {
  getPeople,
  createPerson,
  createPersonPostman,
  updPerson,
  delPerson,
} from "../controllers/people.js";
// const {
//   getPeople,
//   createPerson,
//   createPersonPostman,
//   updPerson,
//   delPerson,
// } = require("../controllers/people");

//Separate router method
// router.get("/", getPeople);
// router.post("/", createPerson);
// router.post("/postman", createPersonPostman);
// router.patch("/:id", updPerson);
// router.delete("/:id", delPerson);

//                OR

// (router chaining method)
router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonPostman);
router.route("/:id").patch(updPerson).delete(delPerson);

// module.exports = router;
