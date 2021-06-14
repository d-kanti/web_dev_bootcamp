const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");
const mate = require("ejs-mate");

const Campground = require("./models/campground");
const { title } = require("process");

app.engine("ejs", mate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error..."));
db.once("open", () => {
  console.log("database connected....");
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/campgrounds", async (req, res) => {
  const camps = await Campground.find({});
  res.render("campgrounds/index", { camps });
});

app.get("/campgrounds/new", (req, res) => {
  res.render("campgrounds/new");
});

app.get("/campgrounds/:id", async (req, res) => {
  const { id } = req.params;
  const camp = await Campground.findById(id);
  res.render("campgrounds/show", { camp });
});

app.post("/campgrounds", async (req, res) => {
  const camp = new Campground(req.body.campground);
  await camp.save();
  res.redirect(`campgrounds/${camp._id}`);
});

app.get("/campgrounds/:id/edit", async (req, res) => {
  const { id } = req.params;
  const camp = await Campground.findById(id);
  res.render("campgrounds/edit", { camp });
});

app.put("/campgrounds/:id", async (req, res) => {
  const { id } = req.params;
  const camp = await Campground.findByIdAndUpdate(id, {
    ...req.body.campground,
  });
  res.redirect(`/campgrounds/${id}`);
});

app.delete("/campgrounds/:id", async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
  res.redirect("/campgrounds");
});

app.listen(3000, () => {
  console.log("\n\n\napp listning on the port 3000....");
});
