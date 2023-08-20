/////////////////////////////////////////////
//
//  passport-waad sample code.
//
/////////////////////////////////////////////c

var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    expressSession = require('express-session'),
    waad = require('../../lib/passport-waad').waadPassport ,
    passport = require('passport');
  
var sessionSecret = '#$&#*(*)#$*(&';
var app = express();

//
//  Middleware
//
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(cookieParser(sessionSecret));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(expressSession({ secret: sessionSecret }));

var passportConfig = {
    "appUrl": "https://passporttestazure-colinedwardrhodes-1.c9.io/",
    "identityMetadata" : "https://login.windows.net/1ad458eb-55b8-484b-b1b7-379be2dd07f6/federationmetadata/2007-06/federationmetadata.xml",
    "loginCallback" :"https://passporttestazure-colinedwardrhodes-1.c9.io/login/callback/",
    "issuer" : "https://passporttestazure-colinedwardrhodes-1.c9.io/",
    "logoutCallback" : "https://passporttestazure-colinedwardrhodes-1.c9.io/logout/callback/",
    "privateCert" : "./passportConfig/private.pem",
    "publicCert" : "./passportConfig/public.pem",
    "tenant":  "ehtTest.onmicrosoft.com",
    "clientId": "e20b5f78-4e8c-4dc2-b891-70d9b6ac4bfb",
    "clientSecret": "PUT YOUR SECRET HERE",
    "testGroups" : [ { "name" : "ReferralGatewayCoordinator" } ],
    "testUser" : "colin.rhodes@ehealthtechnologies.com",
    "testUserName" : "Colin Rhodes"
};

// Creating the auth object wires passport under the hood.
var auth = new waad.waadPassport({
  configuration: passportConfig,
  passport : passport,
  name : 'saml',    //set to test for dev
  app : app
});

var router = express.Router();

router.get('/', function(req, res){
  
  if(req.user) {
    res.render('index', { 
      user : req.user,
      method : auth.name
    });
  } else {
    res.render('notLoggedIn', { } );
  }
});


// Order of routes is important!!
auth.setSSORoutes(
  router,
  function(req,res,next) { 
    next();
  },
  function(req,res,next){ 
    next();
  }
);
router.get('/user',
  auth.ensureAuthenticated,
  auth.memberOf("User", function(req,res) { 
      res.render('notWorthy', { group : 'User' } );
  }),
  function(req,res) { 
    res.render('worthy', {  group : 'User' });
  });
  
router.get('/nouser',
  auth.ensureAuthenticated,
  auth.memberOf("NoUser", function(req,res) { 
      res.render('notWorthy', { group : 'NoUser' } );
  }),
  function(req,res) { 
    res.render('worthy', {  group : 'NoUser' });
  });


app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);

app.listen(process.env.PORT);