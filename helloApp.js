const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("This is a web application with Hello microservice.");
});

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
