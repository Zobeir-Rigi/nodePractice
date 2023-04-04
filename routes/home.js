const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  //   res.send(`<form action="/form" method="post"><label>Name</label><input type="text" name="myName"></input>
  // <button>submit</button></form>`);
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

module.exports = router;
