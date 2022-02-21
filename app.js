const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const port = process.env.PORT;
// Handlebar
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials", (err) => {
  console.log(err);
});

// ? servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: " Gabriel Diaz",
    titulo: "Curso Node",
  });
});

app.get("/generic", (req, res) => {
  //   res.sendFile(__dirname + "/public/generic.html");
  res.render("generic", {
    nombre: " Gabriel Diaz",
    titulo: "Curso Node | generic",
  });
});

app.get("/elements", (req, res) => {
  //   res.sendFile(__dirname + "/public/elements.html");
  res.render("elements", {
    nombre: " Gabriel Diaz",
    titulo: "Curso Node | generic",
  });
});

app.get("*", (req, res) => {
  //   res.send("404 page not found");
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
