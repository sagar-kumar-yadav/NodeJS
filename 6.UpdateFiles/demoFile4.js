// Append "This is my text." to the end of the file "mynewfile3.txt":

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    fs.appendFile('myNewFile3.txt', "This is my text", function(err) {
        if (err) throw err;
        console.log('Updated');
    });
}).listen(8080);