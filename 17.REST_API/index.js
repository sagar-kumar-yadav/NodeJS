const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const express = require("express");

const server = express();

// bodyParser
server.use(express.json());
server.use(morgan('default'));
server.use(express.static('public'));

// create a server
server.listen(8080, () => {
  console.log("Server start");
});

// API ROOT - BASE URL , EX:- google.com/api/v2

// CREATE POST /products
server.post("/products", (req, res) => {
  console.log(req.body);
  data.push(req.body);
  res.status(201).json(req.body);
});

// READ GET /products
server.get("/products", (req, res) => {
  res.json(data);
});

// READ GET /products:id
server.get("/products/:id", (req, res) => {
  const id = +req.params.id;
  const product_Data = data.find((product) => product.id === id);
  res.json(product_Data);
});

// UPDATE PUT /products/:id
server.put('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productIndex = data.findIndex(p=>p.id===id)
  data.splice(productIndex, 1, {...req.body, id:id})
  res.status(201).json();
})

// UPDATE PATCH /products/:id
server.patch('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productIndex = data.findIndex(p=>p.id===id)
  const product = data[productIndex];
  data.splice(productIndex, 1, {...product, ...req.body})
  res.status(201).json();
})

// DELETE DELETE /products/:id
server.delete('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productIndex = data.findIndex(p=>p.id===id)
  const product = data[productIndex];
  data.splice(productIndex, 1)
  res.status(201).json(product);
})