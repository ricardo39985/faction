var express = require('express');
var router = express.Router();
var router = require('express').Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', user: req.user });
});
// Google OAuth login route
router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    // Optionally force pick account every time
    // prompt: "select_account"
  })
);

// Google OAuth callback route
router.get(
  '/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/companies',
    failureRedirect: '/',
  })
);
// OAuth logout route
router.get('/logout', function (req, res) {
  req.logout(() => {});
  res.redirect('/');
});

module.exports = router;
