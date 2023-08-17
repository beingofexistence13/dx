var http     = require('http');
var express  = require('express');
var session  = require('express-session');
var passport = require('passport');
var OpenTokenStrategy = require('..'); // require('passport-opentoken');
var app      = express();
var server   = http.createServer(app);
module.exports = server;
 

/*!
 * App configuration
 */
app.use(session({ secret: "keyboard cat" }));
app.use(passport.initialize());
app.use(passport.session());
    

/**
 * Options for OpenToken parser
 */
var otkOptions = {
  password: 'testPassword',
  cipherSuite: 2,
  tokenName: 'mytoken',
  tokenTolerance: 3600, // seconds
  tokenRenewal: 43200,
  tokenLifetime: 1000
};


/**
 * Fake database of users
 */
var users = {
  john: {
    id: "john",
    name: "John Doe",
    email: "john@example.com"
  },
  joe: {
    id: "joe",
    name: "Joe Dohn",
    email: "joe@example.com"
  },
  foobar: {
    id: "foobar",
    name: "Foo Bar",
    email: "foo@bar.com"
  }
};


/**
 * Verify callback to look up a user
 */
function verifyCallback(username, done) {
  user = users[username] || null;
  if (!user) {
    return done(null, false, { message: 'Incorrect username.' });
  }
  return done(null, user); 
}


/**
 * Save only user.id in passport session
 */
passport.serializeUser(function (user, done) {
  done(null, user.id);
});


/**
 * Fetch user by user.id from passport session
 */
passport.deserializeUser(function (id, done) {
  var user = users[id];
  return done(null, user);
});


// Configure passport to use a new OpenTokenStrategy
passport.use(new OpenTokenStrategy(otkOptions, verifyCallback));


// Routes

app.get('/login/opentoken', function (req, res) {
  var ssoUrl = "https://localhost:9031" + 
    "/idp/startSSO.ping" +
    "?PartnerSpId=PF-DEMO" + 
    "&TargetResource=http://localhost:3000/login/opentoken/callback";
  res.status(302).redirect(ssoUrl);
});

app.get('/login/opentoken/callback', passport.authenticate('opentoken'), function (req, res) {
  console.log("sending result");
  res.send("It worked. Have a cookie.\n<pre>" +
"    (.)(')\n" +
"   / ___, \\  __\n" +
"   \\ '--' / (::)\n\n" +
"    mmm...</pre>");
});

app.get('/logout/opentoken', function (req, res) {
  req.session.destroy();
  res.status(302).redirect('https://localhost:9031/quickstart-app-idp/go?action=logout');
});


// Listen for connections
app.listen(3000, function () {
  console.log("Listening on port %d", server.address().port);
});
