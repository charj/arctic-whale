'use strict'
let express = require('express');
let router = express.Router();
let userController = require(__basedir + '/src/controller/users');

/* GET users listing. */
router.get('/', userController.read);
router.get('/:username', userController.getUser);
router.post('/create', userController.create);

module.exports = router;
