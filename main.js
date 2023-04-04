const express = require("express");
const bodyParser = require("body-parser");
const adminRouters = require("./routes/admin");
const home = require("./routes/home");
const myprofile = require("./routes/myprofile");
const query = require("./routes/query");
// client server extention
const app = express();
app.use(bodyParser.urlencoded({ exteded: false })); // custom middleware
// routes 
app.use(adminRouters);
app.use(home);
app.use(myprofile);
app.use(query);
// end of routes

app.listen(3001, () => console.log("hey! client"));
