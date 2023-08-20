/**
 * Module dependencies.
 */

var express = require('express'), 
    http = require('http'),
    path = require('path'),
    passport = require('passport'),
    util = require('util'),
    AuthicStrategy = require('passport-authic').Strategy,
    // Authic Settings 
    authic_client_id =  '<Your Authic client key>',
    authic_client_secret = '<Your Authic client secret>',
    authic_callback_url = "http://localhost:3000/auth/authic/callback", // Needs to match what you setup in Authic
    authic_subdomain =  "<Your Authic subdomain>";

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

// Passport Setup
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new AuthicStrategy({
    clientID: authic_client_id,
    clientSecret: authic_client_secret,
    callbackURL: authic_callback_url,
    subdomain: authic_subdomain
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

// Routes
app.get('/', function(req, res){
  res.render('index', { user: req.user });
});
// Redirect to Authic hosted user account screen
app.get('/account', ensureAuthenticated, function(req, res){
  res.redirect('https://' + authic_subdomain + '.authic.com/edit_account');
});
// user friendly route to login
app.get('/login', function(req, res){
	res.redirect('/auth/authic?authic_action=signin');
});
// user friendly route to registration
app.get('/register', function(req, res){
	res.redirect('/auth/authic?authic_action=signup');
});

app.get('/auth/authic',
	passport.authenticate('authic'),
  function(req, res){
    // The request will be redirected to Authic for authentication, so
    // this function will not be called.
});

app.get('/auth/authic/callback',
  passport.authenticate('authic', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});
// user friendly route to logout
app.get('/logout', function(req, res){
  req.logout();
  // Set this to whereever you want to redirect to after authic has signed out
  var return_url = encodeURIComponent("http://localhost:3000");
  res.redirect('https://' + authic_subdomain + '.authic.com/authic_sign_out?&return_url=' + return_url);
});

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) { 
if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}