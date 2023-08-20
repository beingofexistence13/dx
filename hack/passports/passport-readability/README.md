# Passport-Readability

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [Readability](http://www.readability.com/) using the OAuth 1.0a API.

This module lets you authenticate using Readability in your Node.js applications.
By plugging into Passport, Readability authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-readability

## Usage

#### Configure Strategy

The Readability authentication strategy authenticates users using a Readability
account and OAuth tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a consumer key, consumer secret, and callback URL.

    passport.use(new ReadabilityStrategy({
        consumerKey: READABILITY_API_KEY,
        consumerSecret: READABILITY_API_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/readability/callback"
      },
      function(token, tokenSecret, profile, done) {
        User.findOrCreate({ readabilityId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'readability'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/readability',
      passport.authenticate('readability'));
    
    app.get('/auth/readability/callback', 
      passport.authenticate('readability', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/jaredhanson/passport-readability/tree/master/examples/login).

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/jaredhanson/passport-readability.png)](http://travis-ci.org/jaredhanson/passport-readability)

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2011-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
