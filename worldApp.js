const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("This is a web application with World microservice.");
});

app.get("/world", (req, res) => {
  res.send("World");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
