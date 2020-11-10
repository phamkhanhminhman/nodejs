function test (req, res) {
    res.send('testController');
    console.log('testController');
}

function index(req, res) {
    res.send('index index')
}

module.exports = {test, index}