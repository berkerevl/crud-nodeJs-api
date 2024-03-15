const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

mongoose
  .connect(
    "mongodb+srv://admin:admin123@backend-nodedb.rnsybry.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backend-nodeDB"
  )
  .then(() => {
    console.log("connected to database");
    app.listen(3000, () => {
      console.log("server is running on Port 3000");
    });
  })
  .catch(() => {
    console.log("cannot connect to database");
  });
