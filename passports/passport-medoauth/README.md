# Passport-GitHub

[Passport](http://passportjs.org/) strategy for authenticating with [medoauth](https://medoauth.com/)
using the OAuth 2.0 API.

This module lets you authenticate using medoauth in your Node.js applications.
By plugging into Passport, medoauth authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-medoauth

## Usage

#### Configure Strategy

The medoauth authentication strategy authenticates users using a medoauth account
and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which accepts
these credentials and calls `done` providing a user, as well as `options`
specifying a client ID, client secret, and callback URL.

    passport.use(new medoauthStrategy({
        clientID: medoauth_CLIENT_ID,
        clientSecret: medoauth_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/medoauth/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ medoauthId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'medoauth'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/medoauth',
      passport.authenticate('medoauth'));

    app.get('/auth/medoauth/callback',
      passport.authenticate('medoauth', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [login example](https://medoauth.com/jaredhanson/passport-medoauth/tree/master/examples/login).

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/jaredhanson/passport-medoauth.png)](http://travis-ci.org/jaredhanson/passport-medoauth)

## Credits

  - [Jared Hanson](http://medoauth.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2011-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>

