# Passport-TripIt

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [TripIt](http://www.tripit.com/) using the OAuth 1.0 API.

This module lets you authenticate using TripIt in your Node.js applications.
By plugging into Passport, TripIt authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-tripit

## Usage

#### Configure Strategy

The TripIt authentication strategy authenticates users using a TripIt account
and OAuth tokens.  The strategy requires a `verify` callback, which accepts
these credentials and calls `done` providing a user, as well as `options`
specifying a consumer key, consumer secret, and callback URL.

    passport.use(new TripItStrategy({
        consumerKey: TRIPIT_API_KEY,
        consumerSecret: TRIPIT_API_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/tripit/callback"
      },
      function(token, tokenSecret, profile, done) {
        User.findOrCreate({ tripitId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'tripit'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/tripit',
      passport.authenticate('tripit'));
    
    app.get('/auth/tripit/callback', 
      passport.authenticate('tripit', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/jaredhanson/passport-tripit/tree/master/examples/login).

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/jaredhanson/passport-tripit.png)](http://travis-ci.org/jaredhanson/passport-tripit)

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2011-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
