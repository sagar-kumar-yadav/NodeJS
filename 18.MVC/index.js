// Model View Controller
const express = require("express");       // here we require express from npm
const morgan = require("morgan");
const server = express();                 // we create server using express generally we write server instead of app
const productRouter = require('./routes/product')

// bodyParser
server.use(express.json());
// server.use(morgan("default"));
// server.use(express.static("public"));
server.use('/api',productRouter.router);



// create a server
server.listen(8080, () => {
  console.log("Server start");
});