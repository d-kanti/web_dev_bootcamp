const mongoose = require("mongoose");
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

// const p = new Product({
//   name: "Kiwi",
//   price: 12,
//   catagory: "fruit",
// });

// p.save()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

const pro = [
  {
    name: "sdf",
    price: 2,
    type: "vegetable",
  },
  {
    name: "hoosf dsf ",
    price: 43,
    type: "fruit",
  },
  {
    name: "egg",
    price: 6,
    type: "dairy",
  },
];

Product.insertMany(pro)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
