// import Http protocol
// create a server with something to connet with client which is response and request
// server has to listen to a port
//  const http = require("http");
const express = require("express");
const app = express();

app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.use((req, res, next) => {
  console.log("first middleware");
  next();
});
app.use((req, res, next) => {
  console.log("second middleware");
  res.send("<h1>Hello world</h1>");
});

app.listen(3000, () => console.log("hey! client"));
