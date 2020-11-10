var express = require('express')
var router = express.Router()
const testController = require('./controllers/testController');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', testController.index)
// define the about route

router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router