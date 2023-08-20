var http          = require('http'),
    path          = require('path'),
    express       = require('express'),
    cookieParser  = require('cookie-parser'),
    session       = require('express-session'),
    morgan        = require('morgan'),
    bodyParser    = require('body-parser'),
    passport      = require('passport'),
    suSAML        = require('passport-stanford'),
    util          = require('util'),
    app           = express(),
    samlPath      = '/saml',
    forcedSaml,
    saml;

app.set('port', 3000);
app.set('views', __dirname + '/app/views');
app.set('view engine', 'pug');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
  secret: 'sooperS3CRET!',
  resave: false,
  saveUninitialized: true,
  name: 'stanford',
  cookie: {
    httpOnly: true,
    maxAge: 600000
  }
}));
app.use(passport.initialize());
app.use(passport.session());

saml = new suSAML.Strategy({
  protocol:           'http://',
  idp:                'stanford',
  entityId:           'https://github.com/scottylogan/passport-stanford',
  path:               samlPath,
  loginPath:          samlPath,
  passReqToCallback:  true,
  passport:           passport,
  decryptionPvkPath:  './private.pem',
  decryptionCertPath: './public.pem',
});

forcedSaml = new suSAML.Strategy({
  name:               'forced',
  protocol:           'http://',
  idp:                'stanford',
  entityId:           'https://github.com/scottylogan/passport-stanford',
  path:               samlPath,
  loginPath:          samlPath,
  passReqToCallback:  true,
  passport:           passport,
  forceAuthn:         true,
  decryptionPvkPath:  './private.pem',
  decryptionCertPath: './public.pem',
});

passport.use(saml);
passport.use(forcedSaml);

passport.serializeUser(function(user, done){
  done(null, JSON.stringify(user));
});

passport.deserializeUser(function(json, done){
  try {
    done(null, JSON.parse(json));
  } catch (err) {
    done(err, null);
  }
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('500', { error: err }); 
});

app.get('/', function(req, res) {
  res.render('home', {
    user: req.isAuthenticated() ? req.user : null,
    loginPath: samlPath,
	});
});

app.all(samlPath,
  function (req, res, next) {
    if (['GET','POST'].indexOf(req.method) === -1) {
      return res.status(405).send('Method not supported');
    }
    return passport.authenticate(req.session.strategy, {
      successReturnToOrRedirect: '/'
    })(req, res, next);
  }
);

app.get('/metadata',
  saml.metadata()
);

app.get('/profile', 
  saml.protect(),
  function(req, res) {
    res.render('profile', {
      user: req.user,
      all:  util.inspect(req.user, { depth: null })
    });
  }
);

app.get('/forced',
  forcedSaml.protect(),
  function(req, res) {
    res.render('profile', {
      user: req.user,
      all:  util.inspect(req.user, { depth: null })
    });
  }
);

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

app.get('/bad', function (req, res, next) {
  next(new Error('BAD!!!'));
});

app.use(function (req, res, next) {
  res.status(404);
  res.render('404', { url : req.url });
});

app.use(function (err, req, res, next) {
  res.status(500);
  res.render('500', { error: err });
});

http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});
