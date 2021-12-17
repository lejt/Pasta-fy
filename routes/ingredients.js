var express = require('express');
var router = express.Router();
const isLoggedIn = require('../config/auth');
const ingredientsCtrl = require('../controllers/ingredients')

// GET '/' page to explore all content
router.get('/ingredients', ingredientsCtrl.index);

// GET '/ingredients/:id' page for details of item
router.get('/ingredients/:id', ingredientsCtrl.show);

// POST '/ingredients/:id/food' page that adds food to build page
router.post('/ingredients/:id/pastas', ingredientsCtrl.createPasta);
router.post('/ingredients/:id/sauces', ingredientsCtrl.createSauce);
router.post('/ingredients/:id/veges', ingredientsCtrl.createVege);
router.post('/ingredients/:id/proteins', ingredientsCtrl.createProtein);

// DELETE '/:id' element that in the category
router.delete('/pasta/:id', ingredientsCtrl.deleteSelectedPasta);
router.delete('/sauce/:id', ingredientsCtrl.deleteSelectedSauce);
router.delete('/vege/:id', ingredientsCtrl.deleteSelectedVege);
router.delete('/protein/:id', ingredientsCtrl.deleteSelectedProtein);

module.exports = router;