var express = require('express');
var router = express.Router();
const isLoggedIn = require('../config/auth');
const buildsCtrl = require('../controllers/builds');

// GET '/' page to explore all content
router.get('/builds', buildsCtrl.index);

router.post('/ingredients/:id/builds', buildsCtrl.create);

module.exports = router;