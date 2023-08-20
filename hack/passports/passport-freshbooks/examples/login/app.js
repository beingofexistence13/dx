// Example app config

// your SUBDOMAIN.  e.g. if you use "http://example.freshbooks.com", use "example"
var FRESHBOOKS_SUBDOMAIN = "example";

// your OAUTH SECRET from My Account -> FreshBooks API
var OAUTH_SECRET = "123456789j0abcdefghijklmnopqrstuvwxyz";

// the hostname of your app.  Mismatch (e.g. 127.0.0.1 vs localhost) may cause errors
var MY_HOSTNAME = "localhost";
var MY_PORT = 3001


// Server code begins: Express + Passport + Passport Freshbooks
// http://expressjs.com  http://passportjs.org/

var express = require('express')
  , http = require('http')
  , passport = require('passport')
  , util = require('util')
  , Strategy = require('../../../passport-freshbooks').Strategy
  ;
// configure Express
var app = express();
app.set('port', process.env.PORT || MY_PORT);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.logger());
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.methodOverride()); // This simulates PUT and DELETE requests
app.use(express.session({ secret: 'keyboard cat' }));

// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());




// Passport session setup.

//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete profile is
//   serialized and deserialized.
passport.serializeUser(function(user, done) {
  // here we store the whole user, because we are not using a database.  With a db, we might only store the user.id
  // the user.id won't be unique across subdomains.
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  // no need to lookup in database, we have the whole thing already in the session
  // With a db, we'd use obj as a user.id to do query
  done(null, obj);
});



// Use the Freshbooks OAuth Strategy within Passport.

//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and profile), and
//   invoke a callback with a user object.
passport.use(new Strategy({
    subdomain: FRESHBOOKS_SUBDOMAIN,
    consumerKey: FRESHBOOKS_SUBDOMAIN,
    consumerSecret: OAUTH_SECRET,
    callbackURL: "http://" + MY_HOSTNAME + ":" + ( process.env.PORT || MY_PORT ) + "/auth/freshbooks/callback"
  },
  // this function is a way to prohibit `valid` OAuth users from logging in.  Here lay the ban-hammer.
  function(token, tokenSecret, profile, done) {
    return done(null, profile);
  }
));



// Configure some routes for our application.

app.get('/', function(req, res){
  res.render('index', { user: req.user });
});
app.get('/account', ensureAuthenticated, function(req, res){
  res.render('account', { user: req.user });
});
app.get('/login', function(req, res){
  res.render('login', { user: req.user });
});
app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});



// Simple route middleware to ensure user is authenticated.  See /account route above

//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
}



// GET /auth/freshbooks - this is OAuth entry point.  See login.ejs template for link to this route

//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in authentication will involve
//   redirecting the user to freshbooks.com.  After authorization, this will
//   redirect the user back to this application at /auth/freshbooks/callback
app.get('/auth/freshbooks',
  passport.authenticate('freshbooks'),
    function(req, res){
      // The request will be redirected to Freshbooks for authentication, so this
      // function will not be called.
    });




// GET /auth/freshbooks/callback - this is callback from Freshbooks with tokens

//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/freshbooks/callback',
  passport.authenticate('freshbooks', { failureRedirect: '/loginfailure' }),
    function(req, res) {
      res.redirect('/');
    });



// Start up the server and try it out!

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
