# Passport-Eve
Passport strategy for authenticating with [Eve Online](http://www.eveonline.com/) SSO using the OAuth 2.0 API.
based on [passport-google-oauth](https://github.com/jaredhanson/passport-google-oauth) by [Jared Hanson](http://github.com/jaredhanson)


This module lets you authenticate using Eve Online SSO in your Node.js applications.  By
plugging into Passport, it can be easily and unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-eve

## Usage

#### Configure Strategy

This strategy authenticates users using an Eve Online
account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a client ID, client secret, and callback URL.

The client ID and secret are obtained by registering an application at the
[Eve Online dev site](http://developers.eveonline.com/applications/).

    var Strategy = require('passport-eve').Strategy;

    passport.use(new Strategy({
        clientID: CCP_CLIENT_ID,
        clientSecret: CCP_SECRET_KEY,
        callbackURL: "http://127.0.0.1:1337/auth/eve_online/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ id: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'eve_online'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/eve_online',
      passport.authenticate('eve_online'));

    app.get('/auth/eve_online/callback', 
      passport.authenticate('eve_online', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Tests

    $ npm install --dev
    $ make test

## License

[The MIT License](http://opensource.org/licenses/MIT)



