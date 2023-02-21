// Create a new, empty file using the open() method:-----

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.open('myNewFile2.txt', 'w', function(err, file){
        if (err) throw err;
        console.log("Saved");
    });
}).listen(8080);