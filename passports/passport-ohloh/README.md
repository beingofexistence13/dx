# Passport-Ohloh

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [Ohloh](http://www.ohloh.net/) using the OAuth 1.0 API.

This module lets you authenticate using Ohloh in your Node.js applications.
By plugging into Passport, Ohloh authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-ohloh

## Usage

#### Configure Strategy

The Ohloh authentication strategy authenticates users using a Ohloh account
and OAuth tokens.  The strategy requires a `verify` callback, which accepts
these credentials and calls `done` providing a user, as well as `options`
specifying a consumer key, consumer secret, and callback URL.

    passport.use(new OhlohStrategy({
        consumerKey: OHLOH_API_KEY,
        consumerSecret: OHLOH_CONSUMER_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/ohloh/callback"
      },
      function(token, tokenSecret, profile, done) {
        User.findOrCreate({ ohlohId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'ohloh'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/ohloh',
      passport.authenticate('ohloh'));

    app.get('/auth/ohloh/callback', 
      passport.authenticate('ohloh', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/jaredhanson/passport-ohloh/tree/master/examples/login).

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/jaredhanson/passport-ohloh.png)](http://travis-ci.org/jaredhanson/passport-ohloh)

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
