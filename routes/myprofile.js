const express = require("express");
const router = express.Router();

router.get("/myprofile", (req, res) => {
  res.send("I will put my Profile page here");
});

module.exports = router;
