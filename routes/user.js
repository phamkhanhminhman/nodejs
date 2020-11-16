var express = require('express')
var router = express.Router()
const userController = require('../controllers/user_controller');


// define the home page route
router.get('/', userController.index)
router.post('/', userController.store);
router.delete('/:userID', userController.remove);
router.put('/:userID', userController.update);
router.get('/:userID', userController.show);


module.exports = router