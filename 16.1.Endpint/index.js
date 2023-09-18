const express = require('express');
const server = express();

// create a server
server.listen(8080, () => {
    console.log("Server start");
});


// API - Endpoint - Route
server.get('/', (req, res) => {
    res.json({type:'GET'});
})

server.post('/', (req, res) => {
    res.json({type:'POST'});
})

server.put('/', (req, res) => {
    res.json({type:'PUT'});
})

server.delete('/', (req, res) => {
    res.json({type:'DELETE'});
})

server.patch('/', (req, res) => {
    res.json({type:'PATCH'});
})

