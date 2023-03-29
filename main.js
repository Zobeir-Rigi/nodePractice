// import Http protocol
// create a server with something to connet with client which is response and request
// server has to listen to a port
//  const http = require("http");
const express = require("express");
const app = express();
app.get("/query", (req, res) => {
  let valueOne = req.query.firstValue;
  let valueTwo = req.query.secondValue;
  console.log(typeof valueOne); // Both are strings so we need to convert them to strings
  res.send(`Hi , let\'s check the queries :  ${Number(valueOne) * Number (valueTwo)}  `);
});
app.all("/secret", (req, res, next) => {
  console.log("Accessing the secret section ...");
  next(); // pass control to the next handler
});
app.get("/myprofile",(req, res){
  res.send("I will put my Profile page here")
})
app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.use((req, res, next) => {
  console.log("first middleware");
  next();
});
// app.use((req, res, next) => {
//   console.log("second middleware");
//   res.send("<h1>Hello world</h1>");
// });

app.listen(3000, () => console.log("hey! client"));
