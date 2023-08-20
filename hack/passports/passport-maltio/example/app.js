var express = require('express')
  , passport = require('passport')
  , util = require('util')
  , MaltioStrategy = require('../passport-maltio');

// API Access link for creating client ID and secret:
// https://api.malt.io/account
var MALTIO_CLIENT_ID = "--YOUR--CLIENT--ID--";
var MALTIO_CLIENT_SECRET = "--YOUR--CLIENT--SECRET--";


// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Malt.io profile is
//   serialized and deserialized.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


// Use the MaltioStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Malt.io
//   profile), and invoke a callback with a user object.
passport.use(new MaltioStrategy({
    clientID: MALTIO_CLIENT_ID,
    clientSecret: MALTIO_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/maltio/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log('Access token sent to verify is ' + accessToken);
    // asynchronous verification, for effect...
    process.nextTick(function () {

      // To keep the example simple, the user's Malt.io profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Malt.io account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }
));




var app = express();

// configure Express
app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.logger());
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.session({ secret: 'keyboard cat' }));
  // Initialize Passport!  Also use passport.session() middleware, to support
  // persistent login sessions (recommended).
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});


app.get('/', function(req, res){
  res.render('index', { user: req.user });
});

// GET /auth/maltio
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Malt.io authentication will involve
//   redirecting the user to api.malt.io.  After authorization, Malt.io
//   will redirect the user back to this application at /auth/maltio/callback
app.get('/auth/maltio',
  passport.authenticate('maltio', { scope: ['user:email'] }),
  function(req, res){
    // The request will be redirected to Malt.io for authentication, so this
    // function will not be called.
  });

// GET /auth/maltio/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/maltio/callback',
  passport.authenticate('maltio', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.listen(3000);
