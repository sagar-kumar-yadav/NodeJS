const http = require('http');

const data = {age:5};

const server = http.createServer((req, res) => {
    console.log('server started');
    
    // res.end(JSON.stringify(data));

    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data));

    // res.setHeader('Content-Type', 'text/html');
    // res.end('hello');

    console.log(req.url);

    
})

server.listen(8080);