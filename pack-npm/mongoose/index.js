const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const alert = require("alert");
const Product = require("./models/products");
mongoose
  .connect("mongodb://localhost:27017/farmStand", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected,,,,,,");
  })
  .catch((err) => {
    console.log("an error occured");
    console.log(err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const catagories = ["fruit", "vegetable", "dairy"];

app.get("/products", async (req, res) => {
  const { cata } = req.query;
  if (cata) {
    const products = await Product.find({catagory:cata});      
    res.render("products/index", { products , catagories, filter:cata});
} else {
    const products = await Product.find({});
    res.render("products/index", { products, catagories, filter:cata});
  }

  
});

app.get("/products/new", (req, res) => {
  res.render("products/new", { catagories });
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  console.log(product);
  res.render("products/show", { product });
});

app.post("/products", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  console.log(newProduct);
  res.redirect(`/products/${newProduct._id}`);
});

app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  console.log(product);

  res.render("products/edit", { product, catagories });
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });

  res.redirect(`/products/${product._id}`);
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  alert("DELETED");
  res.redirect("/products");
});

app.listen(3000, () => {
  console.log("listning on port 3000");
});
