const express = require('express');
const server = express();

// create a server
server.listen(8080, () => {
    console.log("Server start");
});

server.get('/data/:id', (req, res) => {
    console.log(req.params)
    res.json({type:'GET'});
})