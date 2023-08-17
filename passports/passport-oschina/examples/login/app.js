var express = require('express');
var session = require('express-session');
var expressLayouts = require('express-ejs-layouts');

var passport = require('passport');
var util = require('util');
var OSChinaStrategy = require('passport-oschina').Strategy;

var OSCHINA_CLIENT_ID = "--insert-oschina-client-id-here--"
var OSCHINA_CLIENT_SECRET = "--insert-oschina-client-secret-here--";

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete OSChina profile is serialized
//   and deserialized.
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

// Use the OSChinaStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and OSChina
//   profile), and invoke a callback with a user object.
passport.use(new OSChinaStrategy({
        clientID: OSCHINA_CLIENT_ID,
        clientSecret: OSCHINA_CLIENT_SECRET,
        callbackURL: "https://localhost:3000/auth/oschina/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        // asynchronous verification, for effect...
        process.nextTick(function() {

            // To keep the example simple, the user's OSChina profile is returned to
            // represent the logged-in user.  In a typical application, you would want
            // to associate the OSChina account with a user record in your database,
            // and return that user instead.
            return done(null, profile);
        });
    }
));

var app = express();

// configure Express
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(expressLayouts);
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

app.get('/', function(req, res) {
    res.render('index', {
        user: req.user
    });
});

app.get('/account', ensureAuthenticated, function(req, res) {
    res.render('account', {
        user: req.user
    });
});

app.get('/login', function(req, res) {
    res.render('login', {
        user: req.user
    });
});

// GET /auth/oschina
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in OSChina authentication will involve redirecting
//   the user to oschina.net.  After authorization, OSChina will redirect the user
//   back to this application at /auth/oschina/callback
app.get('/auth/oschina',
    passport.authenticate('oschina'),
    function(req, res) {
        // The request will be redirected to OSChina for authentication, so this
        // function will not be called.
    });

// GET /auth/oschina/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/oschina/callback',
    passport.authenticate('oschina', {
        failureRedirect: '/login'
    }),
    function(req, res) {
        res.redirect('/');
    });

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

var port = process.env.PORT || "3000";
app.listen(port, function() {
    console.log("Server listen to " + port);
});


// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login')
}