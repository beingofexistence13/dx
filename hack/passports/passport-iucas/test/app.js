
var logger = require('morgan');
var express = require('express');
var path = require('path');
var passport = require('passport');
var iucas = require('../index.js'); //or 'passport-iucas';
var session = require('express-session');

var app = express();

app.set('views', __dirname +'/views');

app.use(logger('dev')); //TODO - pull it from config or app.get('env')?
app.use(session({secret: 'session secret'}));
app.use(passport.initialize());
app.use(passport.session());

var iucas_strategy = new iucas.Strategy(function(username, done) {
    console.log('TODO - find '+username+' in the db or such..');
    return done(null, {username: username, email: 'user@email.com'});
});
passport.use(iucas_strategy);

//used to support session
passport.serializeUser(function(user, done) {
    console.log("serializing"+user);
    done(null, user.username);
});

passport.deserializeUser(function(username, done) {
    console.log("deserializing "+username);
    done(null, username);
});

//access this to login via IU CAS
app.use('/login', passport.authenticate('iucas', { failureRedirect: '/iucas/fail' }), function(req, res, next) {
    console.log("successfully logged in as "+req.user.username);
    res.redirect('/');
});
//access this to logout
app.use('/logout', function(req, res, next) {
    req.logout();
    res.redirect('/');
});

function ensureAuth(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/login');
    }
}
app.use('/protected', ensureAuth, function(req, res) {
    res.json({user: req.user});
});
//
//just show the current user object
app.use('/', function(req, res, next) {
    res.json({user: req.user, login: '/login', logout: '/logout'});
});

//all else are 404 and forwarded to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

var server = app.listen(12345, function() {
    console.dir(server.address());
});
