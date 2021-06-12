const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  type: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  catagory: { type: String, enum: ["fruit", "vegetable", "dairy"] }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;