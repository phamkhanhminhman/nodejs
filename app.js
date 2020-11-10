const math = require('./math');
math.sub(123,345);
//TEST MODULE EXPORT

let http = require('http');
const express = require('express'); 
const app = express(); 
const port = 8080; 

var test = require('./router');

// ...

app.use('/test', test)
//ROUTING


let server = app.listen(port, function () {
    let host = server.address().address
    let port = server.address().port
    console.log("Ung dung Node.js dang hoat dong tai dia chi: http://%s:%s", host, port)
});


