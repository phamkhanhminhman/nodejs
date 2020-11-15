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

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
  });

  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM name", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

module.exports = {
    create,
    index
}