# Passport-exact

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [Exact](https://developers.exactonline.com/#OAuth Authentication.html%3FTocPath%3DAuthentication%7C_____0) using the OAuth 2.0 API.

This module lets you authenticate using Exact in your Node.js applications.
By plugging into Passport, Exact authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-exact

## Usage

#### Configure Strategy

The Exact authentication strategy authenticates users using a Exact account and OAuth 2.0 tokens. The strategy requires a `verify` callback, which accepts
these credentials and calls `done` providing a user, as well as `options`
specifying a consumerKey, consumerSecret, and callback URL.

    passport.use(new exactStrategy({
        clientID: ID,
        clientSecret: SECRET,
        baseUrl: 'https://start.exactonline.nl',
        callbackURL: "http://127.0.0.1:3000/auth/exact/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ exactid: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'exact'` strategy, to authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/exact',
      passport.authenticate('exact'));

    app.get('/auth/exact/callback', 
      passport.authenticate('exact', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Tests

    $ npm install --dev
    $ make test

## Credits

  - [Eugenio Pace](http://github.com/eugeniop)
  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2011-2014 Eugenio Pace