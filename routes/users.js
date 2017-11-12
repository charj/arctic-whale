var express = require('express');
var router = express.Router();
var userController = require(__basedir + '/src/controller/users');

/* GET users listing. */
router.get('/', userController.read);
router.get('/:username', userController.getUser);
router.post('/create', userController.create);

module.exports = router;
