var express = require('express');
var morgan = require('morgan');
var session = require('@authentication/cookie-session');
var app = express();

var passport = require('passport');
var Raven = require('../');

passport.use(new Raven({
  audience: process.argv[2] || 'http://localhost:3000',
  desc: 'Passport Raven Demo',
  msg: 'Login to demonstrate logging in to a node.js app using passport-raven',
  debug: false
}, function (crsid, response, cb) {
  console.dir(response);
  console.log('Login with crsid: ' + crsid);
  cb(null, {crsid: crsid, isCurrent: response.isCurrent});
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.use(morgan('dev'));
app.use(session({
  maxAge: '1 month',
  keys: ['Some Secret String'],
}));

app.use(passport.initialize());
app.use(passport.session());


app.get('/login', passport.authenticate('raven'), function (req, res) {
  res.redirect('/');
});
app.get('/', function (req, res) {
  if (req.isAuthenticated()) {
    res.send('Logged in as ' + req.user.crsid + ' (a ' + (req.user.isCurrent ? 'current' : 'past') + ' member of the University of Cambridge).');
  } else {
    res.send('<a href="/login">Login using Raven</a>');
  }
});

app.listen(3000);

console.log('listening on http://localhost:3000');
