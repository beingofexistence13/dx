# Windows Azure Active Directory Passport.js Plug-In - Modified by Colin Rhodes

[Passport](http://passportjs.org/) is authentication middleware for Node.js. Passport can be used in any Express-based web application. A comprehensive and large set of strategies support authentication using a username and password, Facebook, Twitter, and more. In order to enable you to quickly integrate Windows Azure Active Directory in to your website quickly, we have developed a strategy for Windows Azure Active Directory.

This code is based on passport-azure-ad, a Microsoft open source project (apache license).

## Configuration

This module relies on a great deal of configuration at Azure and also the provision of a configuration file.

```javascript
{
    "appUrl": "https://passporttestazure-colinedwardrhodes-1.c9.io/",
    "identityMetadata" : "https://login.windows.net/1ad458eb-55b8-484b-b1b7-379be2dd07f6/federationmetadata/2007-06/federationmetadata.xml",
    "loginCallback" :"https://passporttestazure-colinedwardrhodes-1.c9.io/login/callback/",
    "issuer" : "https://passporttestazure-colinedwardrhodes-1.c9.io/",
    "logoutCallback" : "https://passporttestazure-colinedwardrhodes-1.c9.io/logout/callback/",
    "privateCert" : "./passportConfig/private.pem",
    "publicCert" : "./passportConfig/public.pem",
    "tenant":  "ehtTest.onmicrosoft.com",
    "clientId": "e20b5f78-4e8c-4dc2-b891-70d9b6ac4bfb",
    "clientSecret": "bLnXHFXGNGOZ8qU+fe+rekcIZBS5rW6PUOTRlxoS7qA=",
    "testGroups" : [ { "name" : "ReferralGatewayCoordinator" } ],
    "testUser" : "colin.rhodes@ehealthtechnologies.com",
    "testUserName" : "Colin Rhodes"
}
```

## Installation

```
$ npm install passport-waad
```

## Usage

This sample uses a SAML protocol with express.  Please pay close attention to the order of the calls - they are order specific!

Please use the middleware ```ensureAuthenticated``` on routes to ensure users cannot access them without passing auth.

```javascript
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

// Creating the auth object wires passport under the hood.
var auth = new waad.waadPassport({
  configurationFile : 'passportConfig/config.json',
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

```

## License
Copyright (c) Microsoft Open Technologies, Inc.  All rights reserved. Licensed under the Apache License, Version 2.0 (the "License"); 
