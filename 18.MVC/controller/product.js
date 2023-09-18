const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

exports.createProduct = (req, res) => {
  console.log(req.body);
  data.push(req.body);
  res.status(201).json(req.body);
};

exports.getAllProducts = (req, res) => {
  res.json(data);
};

exports.getProduct = (req, res) => {
  const id = +req.params.id;
  const product_Data = data.find((product) => product.id === id);
  res.json(product_Data);
};

exports.replaceProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = data.findIndex((p) => p.id === id);
  data.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};

exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = data.findIndex((p) => p.id === id);
  const product = data[productIndex];
  data.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();
};

exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = data.findIndex((p) => p.id === id);
  const product = data[productIndex];
  data.splice(productIndex, 1);
  res.status(201).json(product);
};
