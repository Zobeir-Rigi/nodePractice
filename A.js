//server.js

const express = require("express");
// const bodyParse = require()
const app = express();
app.use(express.json());

let people = ["Jason"];

app.get("/people", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.json(people);
});

app.put("/people", (request, response) => {
  people.push(...request.body);
  response.json(people);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
