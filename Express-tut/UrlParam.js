const express = require("express");
const app = express();
const { products } = require("./dataJohnProducts.js");

app.get("/", (req, res) => {
  res.send(' <p>HOME PAGE</p> <a href="/api/products">Products</a> ');
});
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});
app.get("/api/products/:productId", (req, res) => {
  const { productId } = req.params;
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
  res.send("Still Learning!");
});

app.get("/api/v1/query", (req, res) => {
  //   console.log(req.query);
  const { search, limit } = req.query;
  let sortedProduct = [...products];
  if (search) {
    sortedProduct = sortedProduct.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProduct = sortedProduct.slice(0, Number(limit));
  }
  if (sortedProduct.length < 1) {
// return res.status(200).send("No products matched your search");
 // return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProduct)
});

app.listen(3000);
console.log("SERVER IS LISTENING ON PORT: https://localhost:3000");
