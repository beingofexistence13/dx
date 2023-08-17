# Passport-AOL

[Passport](http://passportjs.org/) strategy for authenticating with [AOL](http://www.aol.com/)
using OpenID 2.0.

This module lets you authenticate using AOL in your Node.js applications.
By plugging into Passport, AOL authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-aol

## Usage

#### Configure Strategy

The AOL authentication strategy authenticates users using a AOL account,
which is also an OpenID 2.0 identifier.  The strategy requires a `verify`
callback, which accepts this identifier and calls `done` providing a user.
Additionally, options can be supplied to specify a return URL and realm.

    passport.use(new AOLStrategy({
        returnURL: 'http://localhost:3000/auth/aol/return',
        realm: 'http://localhost:3000/'
      },
      function(identifier, done) {
        User.findByOpenID({ openId: identifier }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'aol'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/aol',
      passport.authenticate('aol'));

    app.get('/auth/aol/return', 
      passport.authenticate('aol', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [signon example](https://github.com/jaredhanson/passport-aol/tree/master/examples/signon).

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/jaredhanson/passport-aol.png)](http://travis-ci.org/jaredhanson/passport-aol)

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
