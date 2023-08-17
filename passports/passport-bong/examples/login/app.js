var express = require('express')
  , passport = require('passport')
  , util = require('util')
  , BongStrategy = require('passport-bong').Strategy;


// BONG CONF
var BONG_CLIENT_ID = '--insert-bong-client-id-here--';
var BONG_CLIENT_SECRET = '--insert-bong-client-secret-here--';
var BONG_HOST = 'http://open-test.bong.cn';
var BONG_TOKEN_URL = BONG_HOST + '/oauth/token';
var BONG_AUTHORIZATION_URL = BONG_HOST + '/oauth/authorize';
var BONG_USERPROFILE_URL = BONG_HOST + '/1/userInfo/{$uid}';


// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Bong profile is serialized
//   and deserialized.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


// Use the BongStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Bong
//   profile), and invoke a callback with a user object.
passport.use(new BongStrategy({
    authorizationURL: BONG_AUTHORIZATION_URL,
    userProfileURL: BONG_USERPROFILE_URL,
    tokenURL: BONG_TOKEN_URL,
    clientID: BONG_CLIENT_ID,
    clientSecret: BONG_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/bong/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      // To keep the example simple, the user's Bong profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Bong account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }
));




var app = express.createServer();

// configure Express
app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  // app.use(express.logger());
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

app.get('/account', ensureAuthenticated, function(req, res){
  res.render('account', { user: req.user });
});

app.get('/login', function(req, res){
  res.render('login', { user: req.user });
});

// GET /auth/bong
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in bong authentication will involve redirecting
//   the user to bong.com.  After authorization, bongwill redirect the user
//   back to this application at /auth/bong/callback
app.get('/auth/bong',
  passport.authenticate('bong'),
  function(req, res){
    // The request will be redirected to bong for authentication, so this
    // function will not be called.
  });

// GET /auth/bong/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/bong/callback', 
  passport.authenticate('bong', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.listen(3000);

console.log('server start at:', 'http://127.0.0.1:3000');


// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}
