# passport-oauth2

[![Build](https://travis-ci.org/onshape/passport-onshape.svg?branch=master)](https://travis-ci.org/onshape/passport-onshape)


Onshape authentication strategy for [Passport](http://passportjs.org/).

This module lets you authenticate with Onshape using OAuth 2.0 in your
Node.js applications.
By plugging into Passport, OAuth 2.0 authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-onshape

## Usage

#### Configure Strategy

The Onshape authentication strategy authenticates users using a third-party
account and OAuth 2.0 tokens.  The provider's client identifer and secret,
are specified as options.  The strategy requires a `verify` callback,
which receives an access token and profile, and calls `done` providing a user.

    passport.use(new OAuth2Strategy({
        authorizationURL: 'https://oauth.onshape.com/oauth/authorize',
        tokenURL: 'https://oauth.onshape.com/oauth/token',
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

Use `passport.authenticate()`, specifying the `'oauth2'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/example',
      passport.authenticate('onshape'));

    app.get('/auth/example/callback',
      passport.authenticate('onshape', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Related Modules

- [passport-oauth2](https://github.com/jaredhanson/passport-oauth2) — OAuth 2.0 authentication strategy
- [OAuth2orize](https://github.com/jaredhanson/oauth2orize) — OAuth 2.0 authorization server toolkit

## Tests

    $ npm install
    $ npm test

## Publishing for Onshape Developers

    $ set +o history
    $ export NPM_TOKEN={ONSHAPE_TOKEN}
    $ set -o history
    $ npm set //registry.npmjs.org/:_authToken=$NPM_TOKEN
    $ npm publish

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) Onshape Inc <[http://onshape.com/](http://onshape.com/)>
