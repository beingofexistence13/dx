var express = require('express');
var passport = require('passport')
var bodyParser = require('body-parser')
var session = require('express-session')
var SESStrategy = require('passport-ses').Strategy

// Static user data collection.
var User = {
  findOne: function(query, cb) {
    query = query || {}
    var users = [
      {email: 'test1@example.com', username: 'testuser1'},
      {email: 'test2@example.com', username: 'testuser2'},
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

passport.use('ses', new SESStrategy({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
  source: process.env.FROM_EMAIL,
  hostname: 'https://test-simple.glitch.me',
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

app.get('/auth/ses', passport.authenticate('ses', {
  failureRedirect: '/fail',
  successRedirect: '/',
  emailSentRedirect: '/check-email',
}))

app.get('/check-email', (req, res) => res.status(200).send('Please check your email'))

app.get('/', isAuthenticated, (req, res) => {
  res.status(200).send(`hi~ ${(req.user && req.user.username) || ''} <a href="/logout">Log Out</a>`)
})

app.get('/login', (req, res) => res.status(200).send(`
  <html><body>
    <form action='/auth/ses' method='GET'>
      <input type='email' name='email' placeholder='Email' />
      <input type='submit' />
    </form>
  </body></html>
`))

app.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

app.get('/fail', (req, res) => res.status(400).send('Fail'))

function isAuthenticated(req, res, next) {
  if (!req.user) {
    return res.redirect('/login')
  }
  next()
}

var listener = app.listen(process.env.PORT || 3750, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
