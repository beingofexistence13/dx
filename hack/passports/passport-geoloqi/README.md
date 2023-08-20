# Passport-Geoloqi

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [Geoloqi](http://geoloqi.com/) using the OAuth 2.0 API.

This module lets you authenticate using Geoloqi in your Node.js applications.
By plugging into Passport, Geoloqi authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-geoloqi

## Usage

#### Configure Strategy

The Geoloqi authentication strategy authenticates users using a Geoloqi
account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a client ID, client secret, and callback URL.

    passport.use(new GeoloqiStrategy({
        clientID: GEOLOQI_CLIENT_ID,
        clientSecret: GEOLOQI_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/geoloqi/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ geoloqiId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'geoloqi'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/geoloqi',
      passport.authenticate('geoloqi'));

    app.get('/auth/geoloqi/callback', 
      passport.authenticate('geoloqi', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/jaredhanson/passport-geoloqi/tree/master/examples/login).

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/jaredhanson/passport-geoloqi.png)](http://travis-ci.org/jaredhanson/passport-geoloqi)

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
