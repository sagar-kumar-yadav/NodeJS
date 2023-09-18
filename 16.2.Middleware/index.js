const express = require('express');
const server = express();

// create a server
server.listen(8080, () => {
    console.log("Server start");
});

// create middleware
server.use((req, res, next) => {
    // console.log(req.method, req.ip, req.hostname)
    console.log(req.ip, req.hostname, new Date(), req.get('user-agent'))
    next()
})

// example of authentication
const auth = (req, res, next) => {
    // console.log(req.query)
    // if(req.query.password==='123'){          // it takes the password in query
    //     next()
    // }
    if(req.body.password==='123'){              // it takes the password in body 
        next()
    }
    else{
        res.sendStatus(401);
    }
}

// server.use(auth);            // not a good way
server.get('/', auth, (req, res) => {
    res.json({type:'GET'});
})
