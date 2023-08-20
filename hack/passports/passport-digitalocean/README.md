# Passport-DigitalOcean

[Passport](http://passportjs.org/) strategy for authenticating with [DigitalOcean](https://www.digitalocean.com/)
using the OAuth 2.0 API.

This module lets you authenticate using DigitalOcean in your Node.js applications.
By plugging into Passport, DigitalOcean authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-digitalocean

## Usage

#### Configure Strategy

**NOTE**: Currently DigitalOcean doesn't provide a user's profile through the API, so the Strategy cannot collect user information.

The DigitalOcean authentication strategy authenticates users using a DigitalOcean account
and OAuth 2.0 tokens. The strategy requires a `verify` callback, which accepts
these credentials and calls `done` providing a user, as well as `options`
specifying a client ID, client secret, and callback URL.

    passport.use(new DigitalOceanStrategy({
        clientID: DIGITALOCEAN_CLIENT_ID,
        clientSecret: DIGITALOCEAN_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/digitalocean/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ digitaloceanId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'digitalocean'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/digitalocean',
      passport.authenticate('digitalocean'));

    app.get('/auth/digitalocean/callback', 
      passport.authenticate('digitalocean', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/harbur/passport-digitalocean/tree/master/examples/login).

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/harbur/passport-digitalocean.png)](http://travis-ci.org/harbur/passport-digitalocean)

## Credits

Created by [Dimitris Kapanidis](http://github.com/spiddy)

Code based on passport-github by [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2014 Harbur <[https://harbur.io](https://harbur.io)>

