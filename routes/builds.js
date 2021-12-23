var express = require('express');
var router = express.Router();
const buildsCtrl = require('../controllers/builds');

// GET '/' page to create a pasta dish
router.get('/', buildsCtrl.index);

// POST '/' page that combines selected ingredients into one meal
router.post('/', buildsCtrl.combine);



module.exports = router;