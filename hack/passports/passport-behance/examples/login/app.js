var express = require('express')
  , passport = require('passport')
  , util = require('util')
  , bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')
  , expressSession = require('express-session')
  , swig = require('swig')
  , BehanceStrategy = require('../../lib').Strategy;

var BEHANCE_CLIENT_ID = "--clientID--"
var BEHANCE_CLIENT_SECRET = "--clientSecret--";


// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Behance profile is
//   serialized and deserialized.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


// Use the BehanceStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Behance
//   profile), and invoke a callback with a user object.
passport.use(new BehanceStrategy({
    clientID: BEHANCE_CLIENT_ID,
    clientSecret: BEHANCE_CLIENT_SECRET,
    callbackURL: "https://localhost:3000/auth/behance/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      
      // To keep the example simple, the user's Behance profile is returned
      // to represent the logged-in user.  In a typical application, you would
      // want to associate the Behance account with a user record in your
      // database, and return that user instead.
      return done(null, profile);
    });
  }
));




var app = express();

// configure Express

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view cache', false);
swig.setDefaults({ cache: false });

app.use(cookieParser());
app.use(bodyParser());
app.use(expressSession({ secret: 'keyboard cat' }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));



app.get('/', function(req, res){
  res.render('index', { user: req.user });
});

app.get('/account', ensureAuthenticated, function(req, res){
  res.render('account', { user: req.user });
});

app.get('/login', function(req, res){
  res.render('login', { user: req.user });
});

// GET /auth/behance
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Behance authentication will involve
//   redirecting the user to live.com.  After authorization, Behance
//   will redirect the user back to this application at
//   /auth/behance/callback
app.get('/auth/behance',
  passport.authenticate('behance', { scope: ['activity_read'], state: "some string" }),
  function(req, res){
    // The request will be redirected to Behance for authentication, so
    // this function will not be called.
  });

// GET /auth/behance/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/behance/callback',
  passport.authenticate('behance', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.listen(3000);


// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}
