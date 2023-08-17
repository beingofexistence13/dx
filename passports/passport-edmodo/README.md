# Passport-Edmodo
[![Build Status](https://travis-ci.org/zaption/passport-edmodo.svg?branch=master)](https://travis-ci.org/zaption/passport-edmodo)
[![Code Climate](https://codeclimate.com/github/zaption/passport-edmodo.png)](https://codeclimate.com/github/zaption/passport-edmodo)

[Passport](http://passportjs.org/) strategy for authenticating with [Edmodo](http://edmodo.com/)
using the OAuth 2.0 API.

This module lets you authenticate using Edmodo in your Node.js applications.
By plugging into Passport, Edmodo authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-edmodo

## Usage

#### Configure Strategy

The Edmodo authentication strategy authenticates users using a Edmodo account
and OAuth 2.0 tokens. It uses the code authentication flow by default, but can
also be configured to use the token flow. The strategy requires a `verify` callback,
which accepts these credentials and calls `done` providing a user, as well as `options`
specifying a client ID, client secret, and callback URL.

    passport.use(new EdmodoStrategy({
        clientID: EDMODO_CLIENT_ID,
        clientSecret: EDMODO_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/edmodo/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ edmodoId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'edmodo'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/login/edmodo',
      passport.authenticate('edmodo'));

    app.get('/login/edmodo/callback',
      passport.authenticate('edmodo', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

By default, this will use the Edmodo code authentication flow. If you want to
use the token authentication flow, pass the useTokenFlow option to authenticate,
and send the access token as access_token in the body of your request:

    app.get('/login/edmodo/callback',
      passport.authenticate('edmodo', { useTokenFlow: true }),
      function(req, res) {
        console.log('Authenticated!');
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/zaption/passport-edmodo/tree/master/examples/login).

## Tests

    $ npm install --dev
    $ make test

## Credits

  - [Charlie Stigler](http://github.com/cstigler) at [Zaption](http://www.zaption.com)

  - Based on [passport-github](http://github.com/jaredhanson/passport-github), by [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2014 Zaption <[http://www.zaption.com](http://www.zaption.com)>

