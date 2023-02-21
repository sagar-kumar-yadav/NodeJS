// The fs.unlink() method deletes the specified file:-------------------------------------------

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.unlink('myNewFile2.txt', function(err) {
        if (err) throw err;
        console.log("File Deleted");
    });
}).listen(8080);