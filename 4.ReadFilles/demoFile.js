// Create a Node.js file that reads the HTML file, and return the content:------------

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('demoFile.html', function(err, data){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);