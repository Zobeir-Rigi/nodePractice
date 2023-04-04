const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const adminRouters = require("./routes/admin");
const home = require("./routes/home");
const myprofile = require("./routes/myprofile");
const query = require("./routes/query");
// client server extention
const app = express();

// custom middleware
app.use(bodyParser.urlencoded({ exteded: false }));
// routes
app.use(adminRouters);
app.use(home);
app.use(myprofile);
app.use(query);
// end of routes

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3001, () => console.log("hey! client"));
