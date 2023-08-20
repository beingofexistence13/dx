**DEPRECATED:** On July 31, 2012, Digg was relaunched and support for the Digg
API was removed.  Due to this, Digg no longer implements support for the OAuth
1.0a API.


# Passport-Digg

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [Digg](http://digg.com/) using the OAuth 1.0a API.

This module lets you authenticate using Digg in your Node.js applications.
By plugging into Passport, Digg authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-digg

## Usage

#### Configure Strategy

The Digg authentication strategy authenticates users using a Digg account and
OAuth tokens.  The strategy requires a `verify` callback, which accepts these
credentials and calls `done` providing a user, as well as `options` specifying a
consumer key, consumer secret, and callback URL.

    passport.use(new DiggStrategy({
        consumerKey: DIGG_API_KEY,
        consumerSecret: DIGG_SECRET_KEY,
        callbackURL: "http://127.0.0.1:3000/auth/digg/callback"
      },
      function(token, tokenSecret, profile, done) {
        User.findOrCreate({ diggId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'digg'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/digg',
      passport.authenticate('digg'));
    
    app.get('/auth/digg/callback', 
      passport.authenticate('digg', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/jaredhanson/passport-digg/tree/master/examples/login).

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/jaredhanson/passport-digg.png)](http://travis-ci.org/jaredhanson/passport-digg)

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2011-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
