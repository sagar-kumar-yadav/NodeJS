const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('index.html', 'utf-8');
const data = fs.readFileSync('data.json', 'utf-8');

const server = http.createServer((req, res) => {
    console.log(req.url);

    switch(req.url){
        case '/':
            res.setHeader('Conent-Type', 'text/html');
            res.end(index);
            break;
        case '/api':
            res.setHeader('Content-Type', 'application/json');
            res.end(data);
            break;
        case '/product':
            res.setHeader('Content-Type', 'text/html');
            res.end(data); 
            break;   
        default:
            res.writeHead(404);
            res.end();
    }

    console.log('server started');
    // res.setHeader('Conent-Type', 'text/html');
    // res.setHeader('Content-Type', 'application/json');

    // res.end(index);
    // res.end(data);
})

server.listen(8080);