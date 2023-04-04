const express = require("express");
const router = express.Router();
const path = require("path");

const rootDir = require("../utils/path");

router.get("/", (req, res) => {
  //   res.send(`<form action="/form" method="post"><label>Name</label><input type="text" name="myName"></input>
  // <button>submit</button></form>`);
  res.sendFile(path.join(rootDir, "views", "index.html")); // instead of __dirname , ("..")
});

module.exports = router;
