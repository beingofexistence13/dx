# Passport-Assembla

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [Assembla](http://www.assembla.com/) using the OAuth 2.0 API.

This module lets you authenticate using Assembla in your Node.js applications.  By
plugging into Passport, Assembla authentication can be easily and unobtrusively
integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-assembla

## Usage

#### Configure Strategy

The Assembla authentication strategy authenticates users using an Assembla
account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a client ID, client secret, and callback URL.

The client ID and secret are obtained by registering an application at the
[Developer API Tutorial](http://api-docs.assembla.com/).

    passport.use(new AssemblaStrategy({
        clientID: ASSEMBLA_CLIENT_ID,
        clientSecret: ASSEMBLA_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/assembla/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ assemblaId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'assembla'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/assembla',
      passport.authenticate('assembla'));

    app.get('/auth/assembla/callback', 
      passport.authenticate('assembla', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/maxiperezc/passport-assembla/tree/master/examples/login).

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/maxiperezc/passport-assembla.png)](http://travis-ci.org/maxiperezc/passport-assembla)

## Credits

  - [André Mendonça](https://github.com/andremendonca)
  - [Maximiliano Perez Coto](http://github.com/maxiperezc)

## Thanks

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 
André Mendonça <[Linked In](http://www.linkedin.com/in/andrelmb)>
Maximiliano Perez Coto <[About Me](http://about.me/maxiperezc)>
