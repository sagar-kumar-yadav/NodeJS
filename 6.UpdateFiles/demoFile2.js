// Replace the content of the file "mynewfile3.txt":------------------------

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.writeFile('myNewFile3.txt', 'This is my text', function(err) {
        if (err) throw err;
        console.log("Replaced");
    });
}).listen(8080);