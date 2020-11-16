const response = require('../utils/response');
const mysql = require('mysql')
const db = require('../utils/db_mysql')

function index(req, res) {
    let sql = 'SELECT * FROM user'
    db.query(sql, (err, result) => {
        if (err) throw err
        response.responseWithMessage("COMMON.SUCCESSFULLY", true, result, res);
    })
}

function show(req, res) {
    const userID = req.params.userID;
    let sql = 'SELECT * FROM user WHERE id = ?'
    db.query(sql, [userID], (err, result) => {
        if (err) throw err
        response.responseWithMessage("COMMON.SUCCESSFULLY", true, result, res);
    })
}

function store(req, res) {
    let data = req.body;
    // res.send(data);
    let sql = 'INSERT INTO user SET ?'
    db.query(sql, [data], (err, result) => {
        if (err) throw err
        response.responseWithMessage("COMMON.CREATE_SUCCESS", true, result.insertId, res);
    })
}

function update(req, res) {
    let data = req.body;
    const userID = req.params.userID;
    let sql = 'UPDATE user SET ? WHERE id = ?'
    db.query(sql, [data, userID], (err, result) => {
        if (err) throw err
        response.responseWithMessage("COMMON.UPDATE_SUCCESS", true, userID, res);
    })
}

function remove(req, res) {
    let sql = 'DELETE FROM user WHERE id = ?'
    const userID = req.params.userID;
    db.query(sql, [userID], (err, result) => {
        if (err) throw err
        response.responseWithMessage("COMMON.DELETE_SUCCESS", true, [], res);
    })
}

module.exports = {
    index,
    show,
    store,
    update,
    remove
}