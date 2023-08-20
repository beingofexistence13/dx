# passport-Nuwe

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [Nuwe](http://nuwe.co/) using the OAuth 2.0 API.

This module lets you authenticate using Nuwe in your Node.js applications.  By plugging into Passport, Nuwe
authentication can be easily and unobtrusively integrated into any application or
framework that supports [Connect](http://www.senchalabs.org/connect/)-style
middleware, including [Express](http://expressjs.com/).

## Install

    $ npm install passport-nuwe

## Usage

#### Configure Strategy

The nuwe authentication strategy authenticates users using a nuwe
account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a client ID, client secret, and callback URL.

    passport.use(new NuweStrategy({
        clientID: Nuwe_CLIENT_ID,
        clientSecret: Nuwe_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/nuwe/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ NuweId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'nuwe'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/nuwe',
      passport.authenticate('nuwe'));

    app.get('/auth/nuwe/callback', 
      passport.authenticate('nuwe', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/nuwehq/passport-nuwe/tree/master/examples/login).

## Tests

    $ npm install
    $ npm test

## Credits

  - [Steve Schofield](http://github.com/r3trosteve)
  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2014 Nuwe <[http://nuwe.co/](http://nuwe.co/)>
