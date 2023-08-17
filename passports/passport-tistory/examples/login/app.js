var express = require('express')
    , passport = require('passport')
    , util = require('util')
    , TistoryStrategy = require('../../lib/passport-tistory').Strategy;

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
var logger = require('morgan');
var session = require('express-session');


var TISTORY_CLIENT_ID = ""
var TISTORY_CLIENT_SECRET = "";


// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Foursquare profile is
//   serialized and deserialized.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


// Use the TistoryStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Foursquare
//   profile), and invoke a callback with a user object.
passport.use(new TistoryStrategy({
      clientID: TISTORY_CLIENT_ID,
      clientSecret: TISTORY_CLIENT_SECRET,
      callbackURL: "http://127.0.0.1:3000/auth/tistory/callback"
//      skipUserProfile:true
    },
    function(accessToken, refreshToken, profile, done) {
      // asynchronous verification, for effect...
      console.log("accessToken: " + accessToken);
      console.log("refreshToken: " +refreshToken);

      process.nextTick(function () {

        // To keep the example simple, the user's Foursquare profile is returned
        // to represent the logged-in user.  In a typical application, you would
        // want to associate the Foursquare account with a user record in your
        // database, and return that user instead.
        return done(null, profile);
      });
    }
));

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(session({ secret: 'keyboard cat' }))
app.use(session({secret: '<mysecret>', saveUninitialized: true, resave: true}));
app.use(passport.initialize());
app.use(passport.session())

app.get('/', function(req, res){
  res.render('index', { user: req.user });
});

app.get('/account', ensureAuthenticated, function(req, res){
  res.render('account', { user: req.user });
});

app.get('/login', function(req, res){
  res.render('login', { user: req.user });
});

// GET /auth/foursquare
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Foursquare authentication will involve
//   redirecting the user to foursquare.com.  After authorization, Foursquare
//   will redirect the user back to this application at /auth/foursquare/callback
app.get('/auth/tistory',
    passport.authenticate('tistory'),
    function(req, res){
      console.log(req);
      // The request will be redirected to Foursquare for authentication, so this
      // function will not be called.
    });

// GET /auth/foursquare/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/tistory/callback',
    passport.authenticate('tistory', { failureRedirect: '/login' }),
    function(req, res) {
      console.log(req);

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