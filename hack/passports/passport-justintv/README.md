# Passport-Justin.tv

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [Justin.tv](http://www.justin.tv/) using the OAuth 1.0a API.

This module lets you authenticate using Justin.tv in your Node.js applications.
By plugging into Passport, Justin.tv authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-justintv

## Usage

#### Configure Strategy

The Justin.tv authentication strategy authenticates users using a Justin.tv
account and OAuth tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a consumer key, consumer secret, and callback URL.

    passport.use(new JustintvStrategy({
        consumerKey: JUSTINTV_CONSUMER_KEY,
        consumerSecret: JUSTINTV_CONSUMER_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/justintv/callback"
      },
      function(token, tokenSecret, profile, done) {
        User.findOrCreate({ justintvId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'justintv'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/justintv',
      passport.authenticate('justintv'));
    
    app.get('/auth/justintv/callback', 
      passport.authenticate('justintv', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/jaredhanson/passport-justintv/tree/master/examples/login).

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/jaredhanson/passport-justintv.png)](http://travis-ci.org/jaredhanson/passport-justintv)

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2011-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
