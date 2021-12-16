var express = require('express');
var router = express.Router();
// const isLoggedIn = require('../config/auth');
const buildsCtrl = require('../controllers/builds');

// GET '/' page to explore all content
router.get('/', buildsCtrl.index);

// router.post('/ingredients/:id/pastas', buildsCtrl.createPasta);
// router.post('/ingredients/:id/sauces', buildsCtrl.createSauce);

module.exports = router;