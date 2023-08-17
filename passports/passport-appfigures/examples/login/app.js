var express = require('express')
  , app = express()
  , passport = require('passport')
  , util = require('util')
  , AppFiguresStrategy = require('passport-appfigures').Strategy

var APPFIGURES_CONSUMER_KEY = '--your-app-figures-consumer-key--'
  , APPFIGURES_CONSUMER_SECRET = '--your-app-figures-consumer-secret--'

passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (obj, done) {
  done(null, obj)
})

// Use the AppFiguresStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and appfigures
//   profile), and invoke a callback with a user object.
passport.use(new AppFiguresStrategy({
    consumerKey: APPFIGURES_CONSUMER_KEY,
    consumerSecret: APPFIGURES_CONSUMER_SECRET,
    callbackURL: 'http://127.0.0.1:3000/auth/appfigures/callback'
  },
  function (accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {

      // To keep the example simple, the user's appfigures profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the appfigures account with a user record in your database,
      // and return that user instead.
      return done(null, profile)
    })
  }
))

// configure Express
app.configure(function() {
  app.set('views', __dirname + '/views')
  app.set('view engine', 'ejs')
  app.use(express.logger())
  app.use(express.cookieParser())
  app.use(express.bodyParser())
  app.use(express.methodOverride())
  app.use(express.session({ secret: 'keyboard cat' }))
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(app.router)
  app.use(express.static(__dirname + '/public'))
})


app.get('/', function (req, res){
  console.log(req.user)
  res.render('index', { user: req.user })
})

app.get('/account', ensureAuthenticated, function (req, res){
  console.log(req.user)
  res.render('account', { user: req.user })
})

app.get('/login', function (req, res){
  res.render('login', { user: req.user })
})

// GET /auth/appfigures
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in appfigures authentication will involve
//   redirecting the user to appfigures.com.  After authorization, appfigures
//   will redirect the user back to this application at /auth/appfigures/callback
app.get('/auth/appfigures',
  passport.authenticate('appfigures'),
  function (req, res){
    // The request will be redirected to appfigures for authentication, so this
    // function will not be called.
  })

// GET /auth/appfigures/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/appfigures/callback', passport.authenticate('appfigures', {
  failureRedirect: '/login',
  successRedirect: '/'
}))

app.get('/logout', function (req, res){
  req.logout()
  res.redirect('/')
})

app.listen(3000)


// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/login')
}
