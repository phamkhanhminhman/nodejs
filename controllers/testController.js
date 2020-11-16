// const success = require('../utils/response');
const response = require('../utils/response');

const mysql = require('mysql');

function create(req, res) {

    let data = [{
        'name': "Minh",
        'year': "2020"
    },
    {
        'name': "Man",
        'year': "2021"
    }
    ];
    response.responseWithMessage("COMMON.SUCCESSFULLY", true, data, res);
}

function index(req, res) {
    res.send('index index')
}
console.log(123);
console.log(process.env.DB_USER);

// var con = mysql.createConnection({
//   host: process.env.DB_HOST || "localhost",
//   user: process.env.DB_USER || "root",
//   password: process.env.DB_PASS || "",
//   database: process.env.DB_NAME || "test"
//   });

//   con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM user", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

module.exports = {
    create,
    index
}