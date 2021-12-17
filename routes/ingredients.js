var express = require('express');
var router = express.Router();
const isLoggedIn = require('../config/auth');
const ingredientsCtrl = require('../controllers/ingredients')

// GET '/' page to explore all content
router.get('/ingredients', ingredientsCtrl.index);

router.post('/ingredients/:id', ingredientsCtrl.createPasta);
// router.post('/ingredients/:id', ingredientsCtrl.createSauce);
// router.post('/ingredients/:id', ingredientsCtrl.createVege);
// router.post('/ingredients/:id', ingredientsCtrl.createProtein);


module.exports = router;