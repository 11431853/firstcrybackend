const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");
console.log("sagar");


const connect = require("./configs/db")

const productController = require("./controllers/productcontroller");

const app = express();
app.use(express.json());

app.set("view engine", 'ejs');
app.use(express.static('public'));
// app.use(express.static(__dirname + '/public'));

console.log("abc");

app.use("/products", productController);

app.listen(2345, async () => {
    await connect();
    console.log("server is running on port 2345")
});

