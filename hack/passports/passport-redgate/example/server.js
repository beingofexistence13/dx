'use strict'

var util = require('util')
var express = require('express')
var passport = require('passport')
var deviate = require('deviate')
var RedGateStrategy = require('../')

var app = express()


passport.serializeUser(function (user, done) {
  done(null, user)
})
passport.deserializeUser(function (user, done) {
  done(null, user)
})

passport.use(new RedGateStrategy({
  //If this option is ommitted, the resulting user will not
  //have `emailAddress` or `emailAddressConfirmed` properties

  //auth: {user: 'username', pass: 'password'},
  returnURL: 'http://localhost:3000/login',
  realm: 'http://localhost:3000/'
},
function(user, done) {
  done(null, user)
}))

app.use(express.bodyParser())
app.use(express.cookieParser())
app.use(express.session({secret: 'saklfjdsakl'}))
app.use(passport.initialize())
app.use(passport.session())


app.get('/', function (req, res) {
  if (req.isAuthenticated()) {
    res.send('Logged in as:<br/><pre>' + util.inspect(req.user) +
             '</pre><br/><a href="/logout">LOGOUT</a>')
  } else {
    res.send('<a href="/login">LOGIN</a>')
  }
})
app.get('/login', passport.authenticate('redgate'), deviate('/'))
app.get('/logout', logout, deviate('/'))

function logout(req, res, next) {
  req.logout()
  next()
}

app.listen(3000)
console.log('Listening on http://localhost:3000/')