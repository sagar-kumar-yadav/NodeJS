// Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
// To include the HTTP module, use the require() method:
var http = require("http");


// create a server object
http.createServer(function(req, res){  
    res.write("hello World");                   // write a response to thhe client
    res.end();                                  // end the response
}).listen(8080);                                // the server object listen on port 8080