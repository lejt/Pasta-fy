var express = require('express');
var router = express.Router();
const isLoggedIn = require('../config/auth');
const reviewsCtrl = require('../controllers/reviews')

// POST '/ingredients/:id/reviews' page for review adding
router.post('/ingredients/:id/reviews', reviewsCtrl.create);

// DELETE '/reviews/:id' page for removing a review written by user
router.delete('/reviews/:id', reviewsCtrl.delete);

// PUT '/reviews/:id' page for editting reviews written by user
router.put('/reviews/:id', reviewsCtrl.update);


module.exports = router;