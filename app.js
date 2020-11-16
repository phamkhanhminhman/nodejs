const math = require('./math');
math.sub(123,345);
//TEST MODULE EXPORT

let http = require('http');
const express = require('express'); 
const bodyParser = require('body-parser');
const app = express(); 
const port = 8080; 
require('dotenv').config();

const testRoutes = require('./routes/test');
const userRoutes = require('./routes/user'); 

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))

//ROUTING
app.use('/test', testRoutes);
app.use('/user', userRoutes);


let server = app.listen(port, function () {
    let host = server.address().address
    let port = server.address().port
    console.log("Server is running", host, port)
});


