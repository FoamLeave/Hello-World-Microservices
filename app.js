const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("This is a web application with Hello World microservices.");
});

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.get("/world", (req, res) => {
  res.send("World");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
