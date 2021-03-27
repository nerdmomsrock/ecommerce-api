const products = require("../products.json");

const getProducts = (req, res) => {
  res.status(200).send(products);
};

const getProduct = (req, res) => {
  const item = products.find((val) => val.id === parseInt(req.params.id));
  if (item) {
    return res.status(200).send(item);
  } else {
    return res.status(500).send("Item not in list");
  }
};
const getPrice = (req, res) => {
  if (req.query.price) {
    const items = products.filter(
      (val) => val.price >= parseInt(req.query.price)
    );
    return res.status(200).send(items);
  } else {
    return res.status(200).send(products);
  }
};

module.exports = {
  getProduct,
  getPrice,
  getProducts,
};

//module.exports = getProduct;
//module.exports = getPrice;
