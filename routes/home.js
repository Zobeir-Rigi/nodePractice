const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`<form action="/form" method="post"><label>Name</label><input type="text" name="myName"></input>
<button>submit</button></form>`);
});


module.exports =router