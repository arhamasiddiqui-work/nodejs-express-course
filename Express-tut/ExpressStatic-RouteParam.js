//EXPRESS WAY OF CREATING A SERVER and importing files & json basic
const express = require("express");
const app = express();
const { products } = require("./dataJohnProducts.js");

// getting data from an api
app.get("/", (req, res) => {
  res.send(' <p>HOME PAGE</p> <a href="/api/products">Products</a> ');
});
//to get specific things if we want like id,name,img not price
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});
//to get all the products , Route Param:
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
//to get product and review, req.param indicate on what page we are
app.get("/api/products/:productId/reviews/:reviewId", (req, res) => {
  console.log(req.params);
  res.send("Still Learning!");
});

app.listen(3000);
console.log("SERVER IS LISTENING ON PORT: https://localhost:3000");


//any file in this folder can be accessed by a URL path
//app.use(express.static('folderName'))
// app.use(express.static("./public"));
