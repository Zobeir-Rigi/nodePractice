const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ exteded: false })); 

app.get("/query", (req, res) => {
  let valueOne = req.query.firstValue;
  let valueTwo = req.query.secondValue;
  console.log(typeof valueOne); // Both are strings so we need to convert them to strings
  res.send(
    `Hi , let\'s check the queries :  ${Number(valueOne) * Number(valueTwo)}  `
  );
});

app.get("/myprofile", (req, res) => {
  res.send("I will put my Profile page here");
});

// app.use("/", (req, res) => {
//   res.send("Got a POST request");
// });

app.use("/form", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res) => {
  res.send(`<form action="/form" method="post"><label>Name</label><input type="text" name="myName"></input>
<button>submit</button></form>`);
});

app.listen(3000, () => console.log("hey! client"));
