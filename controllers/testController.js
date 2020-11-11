// const success = require('../utils/response');
const response = require('../utils/response');
const math = require('../math/add');

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
    response.success(200, '123', data, res);
}

function index(req, res) {
    res.send('index index')
}

module.exports = {
    create,
    index
}