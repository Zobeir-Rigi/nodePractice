// import Http protocol
// create a server with something to connet with client which is response and request
// server has to listen to a port
//  const http = require("http");
const express = require("express");
const app = express();

//  const server = http.createServer((response, request)=>{
//     console.log(response);
//  });
app.get("/", function (request, response) {
    response.send("wow")
});

app.listen(3000,()=>console.log("hey! client"));
