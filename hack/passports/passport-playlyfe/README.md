Passport-Playlyfe
=================

Passport strategy for authenticating with the [Playlyfe Platform](http://playlyfe.com)

This module lets you authenticate using Playlyfe in your Node.js applications. 

For accesing the complete Playlyfe API it is recommended you use this module with the [Playlyfe NodeJS SDK](https://github.com/playlyfe/playlyfe-node-sdk)

##Install
    npm install passport-playlyfe

## Usage

###Configure Strategy
    passport = require('passport');
    PlaylyfeOAuth2Strategy = require('passport-playlyfe');
    ...
    passport.use( new PlaylyfeOAuth2Strategy({
      clientID: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET',
      redirectURI: 'YOUR_REDIRECT_URI'
    }, function(accessToken, refreshToken, profile, done) {
       // Custom application code
       done(null, profile);
    }));

The redirect URI must match exactly with any of the registered redirect endpoints or the oauth flow will fail.

###Authenticate Requests

Use ```passport.authenticate()```, specifying the ```'playlyfe'``` strategy, to authenticate requests. 

For example in an express application with connect style middleware.

    app.get('/auth/playlyfe', passport.authenticate('playlyfe'), function(req, res) {
       //Application code.
    });

##Example
For a complete example of a playlyfe application checkout the [Playlyfe Express Application](https://github.com/playlyfe/playlyfe-express-app)

##License
[The MIT License](http://opensource.org/licenses/MIT)

Copyright(c) 2013-2014, Playlyfe Technologies, developers@playlyfe.com, http://dev.playlyfe.com/
