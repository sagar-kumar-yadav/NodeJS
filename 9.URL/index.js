var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// Parse the address:-------------
var q = url.parse(adr, true);


// the parse method return an object containing url properties
console.log(q.host);        // returns 'localhost:8080'
console.log(q.pathname);    // returns '/default.htm'
console.log(q.search);      // returns '?year=2017&month=february'


// The query property returns an object with all the querystring parameters as properties:
var qData = q.query;        // returns an object: { year: 2017, month: 'february' }
console.log(qData.month);   //returns 'february'
console.log(qData.year);
