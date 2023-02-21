// npm install mysql

var mySql = require('mysql');

var con = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sagar%543212##"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
})