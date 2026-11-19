// const express = require("express");
// const { products } = require("./dataJohnProducts.js");

import { products } from "./dataJohnProducts.js";

import express from "express";
const app = express();

const port = 3000;
const hostname = "localhost";

app.get("/", (req, res) => {
  res.send(' <p>HOME PAGE</p> <a href="/api/products">Products</a> ');
});

app.get("/api/products", (req, res) => {
  const newProd = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProd);
});

app.get("/api/products/:productId", (req, res) => {
  // getting parameters: two ways
  const { productId } = req.params;  //1st way
  // const productId=req.params.productId    //2nd way
  const singleProduct = products.find(
    (product) => product.id === Number(productId),
  );
  if (!singleProduct) {
    return res.status(404).send("Product Does Not Exist");
  }
  return res.json(singleProduct);
});

app.get("/api/products/:productId/reviews/:reviewId", (req, res) => {
  console.log(req.params);
  res.send("Review!");
});

// /api/v1/query?search=utopia&limit=3
app.get("/api/v1/query", (req, res) => {
  //   console.log(req.query);
  // Getting query parameters:
  const { search, limit } = req.query;
  let sortedProduct = [...products];
  if (search) {
    sortedProduct=sortedProduct.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProduct = sortedProduct.slice(0, Number(limit));
  }
  if (sortedProduct.length < 1) {
    return res.status(200).send("No products matched your search");
    // return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProduct);
});

app.use((req, res) => {
  res.status(404).send("Error Page not found");
});

app.listen(port, hostname, () => {
  console.log(`SERVER IS LISTENING ON PORT: https://${hostname}:${port}`);
});
