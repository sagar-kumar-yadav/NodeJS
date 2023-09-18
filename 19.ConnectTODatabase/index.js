// Model View Controller
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const server = express();
const productRouter = require("./routes/product");

// db connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/school");
  console.log("database connected");
}


// bodyParser
server.use(express.json());
// server.use(morgan("default"));
// server.use(express.static("public"));
server.use("/api", productRouter.router);

// create a server
server.listen(8080, () => {
  console.log("Server start");
});
