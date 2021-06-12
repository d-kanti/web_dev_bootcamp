const express = require('express');
const app = express();
const path = require('path');
const mongoose = require("mongoose");

app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

const Product = require('./models/products');

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

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);
const amadeus = new Movie({ title: "Amadeus", year: 1834, score: 8.3, rating: "R" });

