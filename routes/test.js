var express = require('express');
var router = express.Router();
var testController = require('./../src/controller/test')

/* GET home page. */
router.get('/', testController.index);

module.exports = router;
