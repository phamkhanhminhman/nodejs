const math = require('./math');
math.sub(123,345);
//TEST MODULE EXPORT

let http = require('http');
const express = require('express'); 
const bodyParser = require('body-parser');
const app = express(); 
const port = 8080; 

var testRoutes = require('./routes/test');

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))

//ROUTING
app.use('/test', testRoutes)


let server = app.listen(port, function () {
    let host = server.address().address
    let port = server.address().port
    console.log("Server is running", host, port)
});


