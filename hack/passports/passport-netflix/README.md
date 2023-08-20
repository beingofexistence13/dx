# Passport-Netflix

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [Netflix](http://www.netflix.com/) using the OAuth 1.0a API.

This module lets you authenticate using Netflix in your Node.js applications.
By plugging into Passport, Netflix authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-netflix

## Usage

#### Configure Strategy

The Netflix authentication strategy authenticates users using a Netflix account
and OAuth tokens.  The strategy requires a `verify` callback, which accepts
these credentials and calls `done` providing a user, as well as `options`
specifying a consumer key, consumer secret, and callback URL.

    passport.use(new NetflixStrategy({
        consumerKey: NETFLIX_API_KEY,
        consumerSecret: NETFLIX_API_SHARED_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/netflix/callback"
      },
      function(token, tokenSecret, profile, done) {
        User.findOrCreate({ netflixId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'netflix'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/netflix',
      passport.authenticate('netflix'));
    
    app.get('/auth/netflix/callback', 
      passport.authenticate('netflix', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/jaredhanson/passport-netflix/tree/master/examples/login).

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/jaredhanson/passport-netflix.png)](http://travis-ci.org/jaredhanson/passport-netflix)

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2011-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
