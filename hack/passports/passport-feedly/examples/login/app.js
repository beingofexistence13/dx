var express = require('express')
    , passport = require('passport')
    , util = require('util')
    , FeedlyStrategy = require('passport-feedly').Strategy;

var APP_ID = "feedly-app-id-here"
var APP_SECRET = "feedly-app-secret-here";

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

passport.use(new FeedlyStrategy({
        clientID: APP_ID,
        clientSecret: APP_SECRET,
        callbackURL: "http://localhost:8080/auth/feedly/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        // asynchronous verification, for effect...
        process.nextTick(function () {
            return done(null, profile);
        });
    }
));

var app = express();

// configure Express
app.configure(function() {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.logger());
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.session({ secret: 'abcdefg' }));
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

// GET /auth/feedly
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in feedly authentication will involve
//   redirecting the user to feedly.com.  After authorization, feedly will
//   redirect the user back to this application at /auth/feedly/callback
app.get('/auth/feedy',
    passport.authenticate('feedly', { scope : 'https://cloud.feedly.com/subscriptions' }),
    function(req, res){
        // The request will be redirected to feedly for authentication, so this
        // function will not be called.
    });

// GET /auth/feedly/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/feedly/callback',
    passport.authenticate('feedly', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    });

app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

app.listen(8080);


// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
}