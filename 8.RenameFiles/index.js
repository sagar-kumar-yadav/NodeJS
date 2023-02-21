//  The fs.rename() method renames the specified file:

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.rename('myNewFile2.txt', 'myrenamedFile.txt', function(err) {
        if (err) throw err;
        console.log("File Renamed");
    });
}).listen(8080);