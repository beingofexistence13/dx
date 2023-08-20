var express = require('express')
  , passport = require('passport')
  , util = require('util')
  , bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')
  , methodOverride = require('method-override')
  , session = require('express-session')
  , static = require('serve-static') 
  , Strategy = require('../lib/passport-exact').Strategy;

var CLIENT_ID = "91c0381c...2b96a8e11";
var CLIENT_SECRET = "mZ...it";

console.log(Strategy);

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Google profile is
//   serialized and deserialized.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


// Use the Exact Strategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new Strategy({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    baseUrl: "https://start.exactonline.nl",
    callbackURL: "http://127.0.0.1:3000/auth/exact/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...

    console.log(profile);

    process.nextTick(function () {
      
      // To keep the example simple, the user's Google profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Google account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }
));




var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(bodyParser());
app.use(methodOverride());
app.use(session({ secret: 'keyboard cat' }));

// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

app.get('/', function(req, res){
  res.render('index', { user: req.user });
});

app.get('/account', ensureAuthenticated, function(req, res){
  res.render('account', { user: req.user });
});

app.get('/login', function(req, res){
  res.render('login', { user: req.user });
});


app.get('/auth/exact',
  passport.authenticate('exact', {state:'somestate'}),
  function(req, res){
    // function will not be called.
  });

app.get('/auth/exact/callback', 
  passport.authenticate('exact', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.use(static(__dirname + '/public'));

app.listen(3000);

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
}