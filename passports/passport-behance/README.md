passport-behance
================

Behance authentication strategy for Passport

## Install

    $ npm install passport-behance

## Usage

#### Configure Strategy

Behance authentication strategy authenticates users using a Behance
account and OAuth 2.0 tokens.  The strategy requires a `verify` callback,
which accepts these credentials and calls `done` providing a user, as well as
`options` specifying a client ID, client secret, and callback URL.

    passport.use(new BehanceStrategy({
        clientID: BEHANCE_CLIENT_ID,
        clientSecret: BEHANCE_CLIENT_SECRET,
        callbackURL: "http://www.example.com/auth/behance/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ BehanceId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'behance'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/behance',
      passport.authenticate('behance', { scope: ['activity_read'], state:"some string" }));

    app.get('/auth/behance/callback', 
      passport.authenticate('behance', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/metacommunications/passport-behance/tree/master/examples/login).

## Tests

    $ npm install
    $ npm test

## Credits

  - [Alexander Popov](https://github.com/mogadanez)
  - based on [Jared Hanson](http://github.com/jaredhanson) previous work

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2014 Alexander Popov <[https://github.com/mogadanez](https://github.com/mogadanez)>

