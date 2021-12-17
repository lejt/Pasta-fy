var express = require('express');
var router = express.Router();
// const isLoggedIn = require('../config/auth');
const buildsCtrl = require('../controllers/builds');

// GET '/' page to explore all content
router.get('/', buildsCtrl.index);

// POST '/:id/meal' page to show combined ingredients on same page
router.post('/:id/meal', buildsCtrl.addPasta);

// POST '/' page that combines selected ingredients into one meal
router.post('/', buildsCtrl.combine);



module.exports = router;