var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.writeFile('myNewFile3.txt', 'hello my name is sagar', function(err){
        if (err) throw err;
        console.log("Saved");
    });
}).listen(8080);