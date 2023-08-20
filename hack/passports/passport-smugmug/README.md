# Passport-SmugMug

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [SmugMug](http://www.smugmug.com/) using the OAuth 1.0a API.

This module lets you authenticate using Dwolla in your Node.js applications.
By plugging into Passport, SmugMug authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-smugmug

## Usage

#### Configure Strategy

The SmugMug authentication strategy authenticates users using a SmugMug account
and OAuth tokens.  The strategy requires a `verify` callback, which accepts
these credentials and calls `done` providing a user, as well as `options`
specifying a consumer key, consumer secret, and callback URL.

    passport.use(new SmugMugStrategy({
        consumerKey: SMUGMUG_KEY,
        consumerSecret: SMUGMUG_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/smugmug/callback"
      },
      function(token, tokenSecret, profile, done) {
        User.findOrCreate({ smugmugId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'smugmug'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/smugmug',
      passport.authenticate('smugmug'));
    
    app.get('/auth/smugmug/callback', 
      passport.authenticate('smugmug', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/jaredhanson/passport-smugmug/tree/master/examples/login).

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/jaredhanson/passport-smugmug.png)](http://travis-ci.org/jaredhanson/passport-smugmug)

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2011-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
