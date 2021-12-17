var express = require('express');
var router = express.Router();
// const isLoggedIn = require('../config/auth');
// const NAMECtrl = require('../controllers/FILENAME');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
