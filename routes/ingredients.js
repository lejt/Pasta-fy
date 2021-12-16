var express = require('express');
var router = express.Router();
const isLoggedIn = require('../config/auth');
const ingredientsCtrl = require('../controllers/ingredients')

// GET '/' page to explore all content
router.get('/ingredients', ingredientsCtrl.index);

router.post('/ingredients/:id', ingredientsCtrl.createPasta);
// router.post('/builds/:id/sauces', buildsCtrl.createSauce);

module.exports = router;