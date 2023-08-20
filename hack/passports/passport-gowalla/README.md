# Passport-Gowalla

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [Gowalla](http://gowalla.com/) using the OAuth 2.0 API.

This module lets you authenticate using Gowalla in your Node.js applications.
By plugging into Passport, Gowalla authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-gowalla

## Usage

#### Configure Strategy

The Gowalla authentication strategy authenticates users using a Gowalla account
and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which accepts
these credentials and calls `done` providing a user, as well as `options`
specifying a client ID, client secret, and callback URL.

    passport.use(new GowallaStrategy({
        clientID: GOWALLA_API_KEY,
        clientSecret: GOWALLA_SECRET_KEY,
        callbackURL: "http://127.0.0.1:3000/auth/gowalla/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ gowallaId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'gowalla'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/gowalla',
      passport.authenticate('gowalla'));

    app.get('/auth/gowalla/callback', 
      passport.authenticate('gowalla', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/jaredhanson/passport-gowalla/tree/master/examples/login).

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/jaredhanson/passport-gowalla.png)](http://travis-ci.org/jaredhanson/passport-gowalla)

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2011-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
