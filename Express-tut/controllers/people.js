// let {people}=require('../dataJohnProducts')

import { people } from "../dataJohnProducts.js";

export const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

export const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide your name" });
  }
  res.status(201).json({ success: true, person: name });
};

export const createPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide your name" });
  }
  res.status(200).json({ success: true, data: [...people, name] });
};

export const updPerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id ${id} ` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
};

export const delPerson = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id ${req.params.id}` });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id),
  );
  return res.status(200).json({ seccess: true, data: newPeople });
};

// module.exports = {
//   getPeople,
//   createPerson,
//   createPersonPostman,
//   updPerson,
//   delPerson,
// };
