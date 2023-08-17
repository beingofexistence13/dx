# passport-lims

[![Build](https://travis-ci.org/taoyuan/passport-lims.svg?branch=master)](https://travis-ci.org/taoyuan/passport-lims)
[![Coverage](https://coveralls.io/repos/taoyuan/passport-lims/badge.svg?branch=master)](https://coveralls.io/r/taoyuan/passport-lims)
[![Quality](https://codeclimate.com/github/taoyuan/passport-lims/badges/gpa.svg)](https://codeclimate.com/github/taoyuan/passport-lims)
[![Dependencies](https://david-dm.org/taoyuan/passport-lims.svg)](https://david-dm.org/taoyuan/passport-lims)

Lims authentication strategy for [Passport](http://passportjs.org/).

This module lets you authenticate using OAuth 2.0 in your Node.js applications.
By plugging into Passport, OAuth 2.0 authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

Note that this strategy provides generic OAuth 2.0 support.  In many cases, a
provider-specific strategy can be used instead, which cuts down on unnecessary
configuration, and accommodates any provider-specific quirks.  See the
[list](https://github.com/jaredhanson/passport/wiki/Strategies) for supported
providers.

Developers who need to implement authentication against an OAuth 2.0 provider
that is not already supported are encouraged to sub-class this strategy.  If you
choose to open source the new provider-specific strategy, please add it to the
list so other people can find it.

## Install

    $ npm install passport-lims

## Usage

#### Configure Strategy

The OAuth 2.0 authentication strategy authenticates users using a third-party
account and OAuth 2.0 tokens.  The provider's OAuth 2.0 endpoints, as well as
the client identifer and secret, are specified as options.  The strategy
requires a `verify` callback, which receives an access token and profile,
and calls `done` providing a user.

    passport.use(new LimsStrategy({
        authorizationURL: 'https://www.example.com/oauth2/authorize',
        tokenURL: 'https://www.example.com/oauth2/token',
        clientID: EXAMPLE_CLIENT_ID,
        clientSecret: EXAMPLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/example/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ exampleId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'lims'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/example',
      passport.authenticate('lims'));

    app.get('/auth/example/callback',
      passport.authenticate('lims', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Related Modules

- [passport-oauth1](https://github.com/jaredhanson/passport-oauth1) — OAuth 1.0 authentication strategy
- [passport-http-bearer](https://github.com/jaredhanson/passport-http-bearer) — Bearer token authentication strategy for APIs
- [OAuth2orize](https://github.com/jaredhanson/oauth2orize) — OAuth 2.0 authorization server toolkit

## Tests

    $ npm install
    $ npm test

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2011-2015 [Tao Yuan]()
