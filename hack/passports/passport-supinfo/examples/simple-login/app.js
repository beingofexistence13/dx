var express = require('express')
  , passport = require('passport')
  , util = require('util')
  , SUPINFOStrategy = require('../../').Strategy;


// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session. Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing. However, since this example does not
//   have a database of user records, the complete SUPINFO profile is serialized
//   and deserialized.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


// Use the SUPINFOStrategy within Passport.
//   Strategies in passport require a `validate` function, which accept
//   credentials (in this case, an OpenID identifier and profile), and invoke a
//   callback with a user object.
passport.use(new SUPINFOStrategy({
    returnURL: 'http://localhost:3000/auth/supinfo/return',
    realm: 'http://localhost:3000/',
    profile: true
  },
  function(identifier, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      
      // To keep the example simple, the user's SUPINFO profile is returned to
      // represent the logged-in user. In a typical application, you would want
      // to associate the SUPINFO account with a user record in your database,
      // and return that user instead.
      profile.identifier = identifier;
      return done(null, profile);
    });
  }
));


var app = express.createServer();

// configure Express
app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.logger());
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.session({ secret: 'keyboard cat' }));
  // Initialize Passport! Also use passport.session() middleware, to support
  // persistent login sessions (recommended).
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(express.static(__dirname + '/../../public'));
});


app.get('/', function(req, res) {
  res.render('index', { user: req.user });
});

// POST /auth/supinfo
//   Use passport.authenticate() as route middleware to authenticate the
//   request. The first step in SUPINFO authentication will involve redirecting
//   the user to id.supinfo.com. After authenticating, SUPINFO will redirect the
//   user back to this application at /auth/supinfo/return
app.post('/auth/supinfo', 
  passport.authenticate('supinfo', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  });

// POST /auth/supinfo/return
//   Use passport.authenticate() as route middleware to authenticate the
//   request. If authentication fails, the user will be redirected back to the
//   "login page" (in this example, i use the same view for both contexts).
app.post('/auth/supinfo/return', 
  passport.authenticate('supinfo', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

app.listen(3000);
