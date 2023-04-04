const express = require("express");
const router = express.Router();

router.get("/query", (req, res) => {
  let valueOne = req.query.firstValue;
  let valueTwo = req.query.secondValue;
  console.log(typeof valueOne); // Both are strings so we need to convert them to strings
  res.send(
    `Hi , let\'s check the queries :  ${Number(valueOne) * Number(valueTwo)}  `
  );
});

module.exports = router;
