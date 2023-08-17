# passport-authic

A [Passport](http://passportjs.org/) strategy for authenticating with the hosted user identity service [Authic](https://www.authic.com/)
via OAuth 2.0.

It depends on the following modules:
    
    "dependencies": {
      "express": "*",
      "ejs": "*",
      "passport": "*"
    }


## Installation

    $ npm install passport-authic

## Usage

#### Configure The Strategy
    
    // Authic Settings 
    var AuthicStrategy = require('passport-authic').Strategy,
    authic_client_id =  '<Your Authic client key>',
    authic_client_secret = '<Your Authic client secret>',
    authic_callback_url = "http://localhost:3000/auth/authic/callback", // Needs to match what you setup in Authic
    authic_subdomain =  "<Your Authic subdomain>";

    passport.use(new AuthicStrategy({
      clientID: authic_client_id,
      clientSecret: authic_client_secret,
      subdomain: authic_subdomain,
      callbackURL: authic_callback_url
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOrCreate({ authicId: profile.id }, function (err, user) {
        return done(err, user);
      });
    }));

#### Authenticating Users with Authic

Authenticate users with `passport.authenticate()`:

    app.get('/login', function(req, res){
      res.redirect('/auth/authic?authic_action=signin');
    });

    app.get('/register', function(req, res){
      res.redirect('/auth/authic?authic_action=signup');
    });

    app.get('/auth/authic',
      passport.authenticate('authic'),
      function(req, res){
        // The request will be redirected to Authic for authentication, so
        // this function will not be called.
      });

    app.get('/auth/authic/callback',
      passport.authenticate('authic', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

It is recommended to create a simple middleware to check for an authenticated user (see an example of how to use it below):

    function ensureAuthenticated(req, res, next) { 
      if (req.isAuthenticated()) { return next(); }
      res.redirect('/login')
    }

You might want to set a route to send the user off to Authic's hosted account screen (this uses the ensureAuthenticated middleware):

    app.get('/account', ensureAuthenticated, function(req, res){
      res.redirect('https://' + authic_subdomain + '.authic.com/edit_account');
    });

You will probably also want a logout route. This will log your user out of both your app and the Authic server:

    app.get('/logout', function(req, res){
      req.logout();
      // Set this to where ever you want to redirect to after Authic has signed your user out
      var return_url = encodeURIComponent("http://localhost:3000");
      res.redirect('https://' + authic_subdomain + '.authic.com/authic_sign_out?&return_url=' + return_url);
    });

## Example App

Refer to the examples folder in the root of this project for a working sample application using passport-authic.

## About Authic
[Authic](https://www.authic.com) is a secure, brandable cloud authentication service that integrates into your web app in seconds leaving you to concentrate on your core business functionality.

## License

(The MIT License)

Copyright (c) 2012 Authic.com

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.