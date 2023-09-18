const fs = require('fs');

const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

const express = require('express');
const server = express();


// create a server
server.listen(8080, () => {
    console.log("Server start");
});

// send responses 
server.get('/',(req, res) => {
    // res.send('<h1>Hello</h1>')   
    // res.sendFile('/Users/sagar kumar yadav/Desktop/NodeJS/16.Express-Day1/index.html');
    res.json(data);
    // res.sendStatus(404);         // not found
    // res.sendStatus(201).send('<h1>Hello</h1>');     // created
})






// server.post('/',auth, (req, res) => {
//     res.json({type:'POST'});
// })



