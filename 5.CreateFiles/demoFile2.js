// Create a new, empty file using the open() method:-----

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.open('deno1.txt', 'w', function(err, file){
        if (err) {
            console.log(err);
        };
        console.log('saved');
    });
}).listen(8080);