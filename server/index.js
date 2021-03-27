const express = require("express");

const { getPrice, getProduct } = require("./getProducts");
console.log(getProduct);
const app = express();

const port = 3001;

app.get("/api/products", getPrice);

app.get("/api/products/:id", getProduct);

app.listen(port, () => {
  console.log("Listening on Port 3001!");
});
