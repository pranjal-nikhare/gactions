const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/health", (req, res) => {
  res.send("everything is good here 👀");
});

app.listen(4000, () => {
  console.log("Server is running on port 3000");
});
