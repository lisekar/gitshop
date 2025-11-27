const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const name = "node.js"

app.get("/", (req, res) => {
  const message = `Welcome to ${name}!`
  res.send(message);
});

const server = app.listen(PORT, () => {
  console.log(`Server is running in port : ${PORT}`);
});

module.exports = { app, server, name };
