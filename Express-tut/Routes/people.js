const express = require("express");
const router = express.Router();

const { people } = require("../dataJohnProducts");
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updPerson,
  delPerson,
} = require("../controllersMethod/people");

//Separate router method
// router.get("/", getPeople);
// router.post("/", createPerson);
// router.post("/postman", createPersonPostman);
// router.put("/:id", updPerson);
// router.delete("/:id", delPerson);

//                OR  

// (router chaining method)
router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonPostman);
router.route("/:id").put(updPerson).delete(delPerson);

module.exports = router;
