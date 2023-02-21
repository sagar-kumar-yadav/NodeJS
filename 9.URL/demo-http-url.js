var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);

// This object has a property called "url" which holds the part of the url that comes after the domain name