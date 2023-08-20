# passport-rescour

[Passport](http://passportjs.org/) strategy for authenticating with [REscour](http://www.rescour.com/)
using the OAuth 2.0 API.

This module lets you authenticate using REscour in your Node.js applications.
By plugging into Passport, REscour authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-rescour

## Usage

#### Configure Strategy

The REscour authentication strategy authenticates users using a REscour
account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying an app ID, app secret, callback URL.

    passport.use(new REscourStrategy({
        clientID: RESCOUR_SSO_KEY,
        clientSecret: RESCOUR_SSO_SECRET,
        callbackURL: "http://localhost:3000/auth/rescour/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ ssoId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'rescour'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/oauth/authorize',
      passport.authenticate('rescour'));

    app.get('/auth/rescour/callback',
      passport.authenticate('rescour', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Tests

    $ npm install
    $ npm test

## Credits

  - [Spencer Applegate](http://github.com/spencerapplegate)
  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2014 REscour Inc. <[http://rescour.com/](http://rescour.com/)>
