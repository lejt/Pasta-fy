var express = require('express');
var router = express.Router();
const isLoggedIn = require('../config/auth');
const NAMECtrl = require('../controllers/FILENAME');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/', moviesCtrl.index);
// // Use isLoggedIn middleware to protect routes
// router.get('/new', isLoggedIn, moviesCtrl.new);
// router.get('/:id', moviesCtrl.show);
// router.post('/', isLoggedIn, moviesCtrl.create);

module.exports = router;
