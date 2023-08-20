var express = require('express');
var passport = require('passport')
var bodyParser = require('body-parser')
var session = require('express-session')
var EmailStrategy = require('./strategy')
var mongoose = require('mongoose')

/*
 * Define Token model.
 */
var TokenSchema = new mongoose.Schema({
  value: String,
  email: String,
  createdAt: {
    type: Date,
    default: () => new Date(),
  },
})

TokenSchema.virtual('expirationDuration').get(function() {
  return 1000 * 60 * 15 // 15 minutes
})

TokenSchema.methods.isValid = function() {
  return new Date() - this.createdAt < this.expirationDuration
}

TokenSchema.methods.destroy = function() {
  this.remove(console.log)
}

var Token = mongoose.model('Token', TokenSchema)

mongoose.connect(process.env.MONGODB_URI)

/*
 * Define TokenStore object using Token model.
 */
var tokenStore = {
  set: function(value, email, cb) {
    Token.create({
      value,
      email,
    }, cb)
  },
  get: function(value, cb) {
    Token.findOne({value}, cb)
  },
}

// Static User data collection.
var User = {
  findOne: function(query, cb) {
    query = query || {}
    var users = [
      {email: 'test1@example.com', username: 'testuser1'},
      {email: 'test2@example.com', username: 'testuser2'}
    ]
    for (var i = 0; i < users.length; i++) {
      if (users[i].email === query.email) {
        cb(null, users[i])
        return
      }
    }
    cb(new Error('Email not found'))
  }
}

passport.use('email', new EmailStrategy({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
  source: process.env.FROM_EMAIL,
  hostname: 'localhost:3750',
}, function(email, next) {
  User.findOne({ email }, function(err, user) {
    if (err) { return next(err) }
    if (!user) { return next(null, false) }
    next(null, user)
  })
}))

passport.serializeUser((user, done) => {
  done(null, user.email)
})

passport.deserializeUser((email, done) => {
  User.findOne({email}, done)
})

var app = express();

app.use(bodyParser.urlencoded())

app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  resave: true,
}))

app.use(passport.initialize())

app.use(passport.session())

app.get('/login', passport.authenticate('email', {
  failureRedirect: '/fail',
  successRedirect: '/',
  emailSentRedirect: '/check-email',
}), (req, res) => {
  if (req.query.email) {
    res.json({message: 'Please check your email'})
  } else {
    res.redirect('/')
  }
})

app.get('/check-email', (req, res) => {
  res.status(200).send('Please check your email')
})

app.get('/', (req, res) => {
  if (!req.user) {
    res.status(200).send(`
  <html><body><form action='/login' method='GET'>
    <input type='email' name='email' placeholder='Email' />
    <input type='submit' />
  </form></body></html>
`)
  } else {
    res.status(200).send(`hi~ ${(req.user && req.user.username) || ''} <a href="/logout">Log Out</a>`)
  }
})

app.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

app.get('/fail', (req, res) => res.status(400).send('Fail'))

var listener = app.listen(process.env.PORT || 3750, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
