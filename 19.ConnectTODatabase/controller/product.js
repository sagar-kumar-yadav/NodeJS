const fs = require("fs");
const model = require('../model/product');
const Product = model.Product;


// create product
// exports.createProduct = (req, res) => {

//   const product = new Product();
//   product.title = 'PhoneX';
//   product.price = 9999;
//   product.rating = 5;
//   product.save((err, doc)=>{
//     console.log({err, doc})
//     res.status(201).json(doc);
//   })

//   // res.status(201).json(req.body);
// };


exports.createProduct = (req, res) => {

  const product = new Product(req.body);
  product.save((err, doc)=>{
    if (err) {
      res.status(400).json(err);
    }else{
      res.status(201).json(doc);
    }
  })
};


// read
exports.getAllProducts = async (req, res) => {
  const products = await Product.find()
  res.json(products);
};

// read one
// exports.getProduct = async (req, res) => {
//   const product = await Product.find({price:{$gt500}})
//   res.json(product);
// };

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id)
  res.json(product);
};

exports.replaceProduct = (req, res) => {
  const id = req.params.id;
  const productIndex = data.findIndex((p) => p.id === id);
  data.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};

exports.updateProduct = (req, res) => {
  const id = req.params.id;
  const productIndex = data.findIndex((p) => p.id === id);
  const product = data[productIndex];
  data.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();
};

exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  const productIndex = data.findIndex((p) => p.id === id);
  const product = data[productIndex];
  data.splice(productIndex, 1);
  res.status(201).json(product);
};
