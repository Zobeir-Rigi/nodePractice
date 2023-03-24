// import Http protocol 
// create a server with something to connet with client which is response and request 
// server has to listen to a port
 const http = require("http");
 const server = http.createServer((response, request)=>{
    console.log(response);
 });
 server.listen(3000);
