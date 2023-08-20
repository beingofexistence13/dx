var express = require('express')
  , passport = require('passport')
  , util = require('util')
  , session = require('express-session')
  , cookieParser = require('cookie-parser')
  , bodyParser = require('body-parser')
  , morgan = require('morgan')
  , methodOverride = require('method-override')
  , SliceStrategy = require('passport-slice').Strategy;

var SLICE_CLIENT_ID = "--insert--id--here--"
var SLICE_CLIENT_SECRET = "--insert--secret--here--";


// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session. Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing. However, since this example does not
//   have a database of user records, the complete Slice profile is serialized
//   and deserialized.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


// Use the SliceStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Slice
//   profile), and invoke a callback with a user object.
passport.use(new SliceStrategy({
    clientID: SLICE_CLIENT_ID,
    clientSecret: SLICE_CLIENT_SECRET,
    callbackURL: "https://www.example.net/auth/slice/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      
      // To keep the example simple, the user's Slice profile is returned to
      // represent the logged-in user. In a typical application, you would want
      // to associate the Slice account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }
));




var app = express();

// configure Express
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(morgan('combined', {skip: function (req, res) {return res.statusCode < 400}}));
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(session({secret: 'keyboard cat', resave: false, saveUninitialized: true}));
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

// GET /auth/slice
//   Use passport.authenticate() as route middleware to authenticate the
//   request. The first step in Slicd authentication will involve redirecting
//   the user to slice.com. After authorization, Slice will redirect the user
//   back to this application at /auth/slice/callback
app.get('/auth/slice',
  passport.authenticate('slice'),
  function(req, res){
    // The request will be redirected to Slice for authentication, so this
    // function will not be called.
  });

// GET /auth/slice/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request. If authentication fails, the user will be redirected back to the
//   login page. Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/slice/callback', 
  passport.authenticate('slice', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.listen(3000);


// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected. If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed. Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}
