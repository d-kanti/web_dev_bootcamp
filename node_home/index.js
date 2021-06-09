const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/app/:id", (req, res) => {
  let { id } = req.params;
  res.render(path.join('app',id));
});

app.listen(3000, () => {
  console.log("listning to the port 3000");
});
