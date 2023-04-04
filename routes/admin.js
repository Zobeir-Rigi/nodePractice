const express = require("express");
const router = express.Router();

const fs = require("fs");

router.post("/form", (req, res) => {
  // console.log(req.body);
  //   const message = req.body.myName;
  //   console.log(message);
  fs.writeFile(`./data/message.txt`, req.body.myName, (err) => {
    if (err) throw err;
    res.redirect("/");
  });
});

module.exports = router;
