var express = require('express')
    , passport = require('passport')
    , util = require('util')
    , DeskcomStrategy = require('passport-deskcom').Strategy;

var DESKCOM_CONSUMER_KEY = "-----";
var DESKCOM_CONSUMER_SECRET = "------";

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

passport.use(
    new DeskcomStrategy(
        {
            consumerKey: DESKCOM_CONSUMER_KEY,
            consumerSecret: DESKCOM_CONSUMER_SECRET,
            site: "https://example.desk.com",
	        callbackURL: "http://127.0.0.1:3000/auth/deskcom/callback"
        },
        function(token, tokenSecret, profile, done) {
            process.nextTick(function () {
                return done(null, profile);
            });
        }
    )
);

var express = require("express");
var app = express();

// configure Express
app.configure(function() {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.logger());
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

// GET /auth/deskcom
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Twitter authentication will involve redirecting
//   the user to desk.com.  After authorization, the Twitter will redirect
//   the user back to this application at /auth/deskcom/callback
app.get('/auth/deskcom',
    passport.authenticate('deskcom'),
    function(req, res){
        // The request will be redirected to Twitter for authentication, so this
        // function will not be called.
    });

// GET /auth/deskcom/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/deskcom/callback',
    passport.authenticate('deskcom', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    });

app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

app.listen(3000);

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
}
