const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

const Campground = require("./models/campground");
const { title } = require("process");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));




mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error..."));
db.once("open", () => {
  console.log("database connected....");
});







app.get("/", (req, res) => {
  res.render("home");
});

app.get("/camp", async (req, res) => {
  const camp = new Campground({ title: "two camp", description: "one or two" });
  await camp.save();
  res.send(camp);
});

app.listen(3000, () => {
  console.log("\n\n\napp listning on the port 3000....");
});
