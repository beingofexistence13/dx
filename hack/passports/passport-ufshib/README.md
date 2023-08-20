##Passport-UFshib
===============

Passport authentication strategy for University of Florida's Shibboleth service.

This module was cloned from David Stearns https://github.com/drstearns/passport-uwshib and then modified considerably.

This module currently uses my fork of the [passport-saml](https://github.com/bergie/passport-saml) module located: https://github.com/crohead13/passport-saml


You must register your SP with [UF IAM](http://identity.it.ufl.edu/process/technologies/shibboleth/)

##Installation
------------

  npm install passport-ufshib

or if using a [package.json file](https://www.npmjs.org/doc/package.json.html), add this line to your dependencies hash:

  "passport-ufshib": "*"
  
  
##Usage
-----

This module provides a Strategy for the [Passport](http://passportjs.org/) framework, which is typically used with [Express](http://expressjs.com/). Thus, there are several modules you need to require in your server script in addition to this module.
```
  var http         = require('http');                     //http server
  var https        = require('https');                    //https server
  var fs           = require('fs');                       //file system
  var express      = require("express");                  //express middleware
  var morgan       = require('morgan');                   //logger for express
  var bodyParser   = require('body-parser');              //body parsing middleware
  var cookieParser = require('cookie-parser');            //cookie parsing middleware
  var session      = require('express-session');          //express session management
  var passport     = require('passport');                 //authentication middleware
  var ufshib       = require('passport-ufshib');          //UF Shibboleth auth strategy
```
  You must create a shibboleth2.json file and locate it in a ./config directory off the root of your server.
  Example shibboleth2.json contents:
```
  {
  	"idp_entrypoint": "https://{IDP_HOST}/idp/profile/SAML2/Redirect/SSO",
  	"domain": "your.website.ufl.edu",
   	"entityId" :"urn:edu:ufl:dev:00000",
   	"cert_path": "./security/server-cert.pem",
   	"pvt_key_path": "./security/server-pvk.pem",
   	"attribute_path": "./config/attribute-map.xml",
   	"status_401_route": "/api"
  }
```
  
  Also place a current attribute-map.xml file in the ./config directory.  The location to place this is configurable from within the shibboleth2.json file.
  
  You must use openssl to create a self signed certificate and private key pair to use to encrypt traffic with the IDP. The paths to where you put your cert/key pair is configurable in the shibboleth2.json file as well.  I put them in another directory ./security located off the root of the server as well.
  
  The status_401_route object allows you to have different redirect behavior for api routes.  In angularjs it is not convenient to call an api and get redirected to a login page for an expired session. So this allows you to configure a route that starts with /api, for example, and have it return a 401 instead of a logon page redirect.  This will save you XSS errors in your users browser.  Typically when you recieve an api error with status 401, you would reload the entire page, triggering a redirect to the logon page at the IDP.
  
  `"status_401_route": "/api"`
  
  The script creates the UF Shibboleth Strategy, and tells Passport to use it.
```
    var strategy = new ufshib.Strategy({
        callbackUrl: loginCallbackUrl,
        forced: true
    });

    passport.use(strategy);
```  
    

You will typically want to use sessions to allow users to authenticate only once per-sesion. The next functions are called by Passport to serialize and deserialize the user to the session. As noted in the comments, you would typically want to serialize only the unique ID (`.netID`) and reconstitute the user from your database during deserialzie. But to keep things simple, the script serializes the entire user and deserializes it again.
```
    passport.serializeUser(function(user, done){
        done(null, user);
    });

    passport.deserializeUser(function(user, done){
        done(null, user);
    });
```
Next, the script registers a few routes to handle login, the login callback, and the standard metadata. This module provides implementations for the metadata route, and you use passport.authenticate for the login and login callback routes. The login route will redirect the user to the UW single sign-on page, and the UW IdP will then redirect the user back to the login callback route.

```
  //////////////////////////////////////////////////////////////////////////////
  // login, login callback, and metadata routes
  //
  app.get(loginUrl, passport.authenticate(strategy.name), ufshib.backToUrl());
  app.post(loginCallbackUrl, passport.authenticate(strategy.name), ufshib.backToUrl());
  app.get(ufshib.urls.metadata, ufshib.metadataRoute(strategy));
  
  app.use(ufshib.ensureAuth(loginUrl));
```

The `ufshib.backToUrl()` is a convenience middleware that will redirect the browser back to the URL that was originally requested before authentication.

Lastly, the script tells Express to use the `ensureAuth()` middleware provided by this module to secure all routes declared after this.
```
    //secure all routes following this
    app.use(ufshib.ensureAuth(loginUrl));
```
Any route requested after this middleware will require authentication. When requested, those routes will automatically redirect to the `loginUrl` if the user has not already authenticated. After successful authentication, the browser will be redirected back to the original URL, and the user information will be available via the `.user` property on the request object.

Note that `ensureAuth` can also be used to selectively secure routes. For example:
```
    app.get('protected/resource', ensureAuth(loginUrl), function(req, res) {
        //user has authenticated, do normal route processing
        //user is available via req.user
    });
```

