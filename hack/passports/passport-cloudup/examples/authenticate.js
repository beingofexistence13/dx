var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var cloudupStrategy = require('../lib/').Strategy;

var app = express();
var port = 5000;

var clientID = 'client ID';
var clientSecret = 'client secret';


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


passport.use(new cloudupStrategy({
  clientID: clientID,
  clientSecret: clientSecret,
  callbackURL: '/auth/cloudup/callback'
},
function(access, token, profile, done){
  /*
  *  User.findOrCreate(..., function (err, user) {
  *    return done(err, profile);
  *  });
  *
  */
  //console.log(profile);
  return done(null, profile);
}));


app.use(cookieParser());
app.use(session({secret: 'keyboard kat'}));
app.use(passport.initialize());
app.use(passport.session());


app.get('/', function(req, res){
  if (req.user){
    res.send(req.user);
  }
  else{
    res.send('<a href="/auth/cloudup">Login</a>');
  }
});

app.get('/auth/cloudup', passport.authenticate('cloudup'));

app.get('/auth/cloudup/callback',
  passport.authenticate('cloudup'), function(req, res){
    if (req.user){
      res.redirect('/');
    }
    else {
      res.redirect('/login');
    }
  }
);


http.createServer(app).listen(port);
console.log('starting on port: '+ port);
