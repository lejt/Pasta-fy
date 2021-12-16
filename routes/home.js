var express = require('express');
var router = express.Router();
const passport = require('passport');
// const NAMECtrl = require('../controllers/FILENAME');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['email', 'profile'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
