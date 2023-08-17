# Passport-eloqua

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [Eloqua](http://eloqua.com/) using the OAuth 2.0 API.

## Install

    $ npm install passport-eloqua

## Usage

#### Configure Strategy

    EloquaStrategy = require('passport-eloqua').EloquaStrategy;

    passport.use(new EloquaStrategy({
        clientID: ELOQUA_CLIENT_ID,
        clientSecret: ELOQUA_CLIENT_SECRET,
        callbackURL: "http://example.com/auth/eloqua/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ eloquaId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'eloqua'` strategy, to 
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/eloqua',
      passport.authenticate('eloqua'));

    app.get('/auth/eloqua/callback',
      passport.authenticate('eloqua', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Thanks

  - [Jared Hanson](http://github.com/jaredhanson)
  - [dreadjr](http://github.com/dreadjr)

## License

  [The MIT License](http://opensource.org/licenses/MIT)

  Copyright (c) 2011-2014 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>, Et al.
