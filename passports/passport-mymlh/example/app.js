var express       = require('express');
var passport      = require('passport');
var util          = require('util');
var MyMLHStrategy = require('../lib/index').Strategy;
var session       = require('express-session');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var morgan        = require('morgan');

// Config to hold Client ID and Secret
// example found in config.example.js
const config      = require('./config.js');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Use MyMLHStrategy within Passport
// Callback function gives us the accessToken, refreshToken, and profile
passport.use(new MyMLHStrategy({
  clientID: config.MYMLH_CLIENT_ID,
  clientSecret: config.MYMLH_SECRET,
  callbackURL: "http://localhost:8080/callback/mymlh",
  scope: [
    'email',
    'phone_number',
    'demographics',
    'birthday',
    'education',
    'event'
  ]
}, function(accessToken, refreshToken, profile, done) {
  console.log(accessToken);
  process.nextTick(function() {
    console.log('AYYYYYYYYYY LMAOOO');
    console.log(profile);
    return done(null, profile);
  });
}));

// Set up the Express server
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'hackru', resave: false, saveUninitialized: false }));

// Set up passport
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res)=>{
  res.render('index', {user: req.user});
});

app.get('/account', (req, res)=>{
  res.render('account', {user: req.user});
});

app.get('/login', (req, res)=>{
  res.render('login', {user: req.user});
});

// This is where authentication starts
app.get('/register', passport.authenticate('mymlh'), (req, res)=>{

});

// MyMLH redirects back here with authorization code
app.get('/callback/mymlh', passport.authenticate('mymlh', {
  failureRedirect: '/login',
  successRedirect: '/account'
}));

app.get('/logout', (req, res)=>{
  req.logout();
  res.redirect('/');
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

app.listen(8080);
