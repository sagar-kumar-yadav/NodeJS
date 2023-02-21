// The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created.

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.appendFile('myNewFile2.txt', 'Hello content!', function(err){
        if (err) throw err;
        console.log("Success");
    });
}).listen(8080);