// import Http protocol
// create a server with something to connet with client which is response and request
// server has to listen to a port
//  const http = require("http");
const express = require("express");
const app = express();
// app.use((req, res, next) => {
//   console.log("first middleware");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("second middleware");
//   res.send("<h1>Hello world</h1>");
//   next()
// });

app.get("/", function (request, response,next) {
  const myArr = ["apple", "Kiwi", `orange`];
  let currentDate = new Date();

  response.send(currentDate.toLocaleTimeString());
  next()
});

app.get("/", function (request, response,next) {
  response.send("Another route");
  next();
});

app.get("/", function (request, response) {
  const someData = [1, 2, 3];
  response.json(someData);
});

app.listen(3000, () => console.log("hey! client"));
