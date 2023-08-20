# Passport-MojeID

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [MojeID](https://www.mojeid.cz/) using OpenID 2.0.

This module lets you authenticate using MojeID in your Node.js applications.
By plugging into Passport, MojeID authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Installation

    $ npm install passport-mojeid

## Usage

#### Configure Strategy

The MojeID authentication strategy authenticates users using a MojeID account,
which is also an OpenID 2.0 identifier.  The strategy requires a `validate`
callback, which accepts this identifier and calls `done` providing a user.
Additionally, options can be supplied to specify a return URL and realm.

    passport.use(new MojeIDStrategy({
        returnURL: 'http://localhost:3000/auth/mojeid/return',
        realm: 'http://localhost:3000/'
      },
      function(identifier, done) {
        User.findByOpenID({ openId: identifier }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'mojeid'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/mojeid',
      passport.authenticate('mojeid'));

    app.get('/auth/mojeid/callback',
      passport.authenticate('mojeid', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [signon example](https://github.com/xmikus01/passport-mojeid/tree/master/examples/signon).

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/xmikus01/passport-mojeid.png)](http://travis-ci.org/xmikus01/passport-mojeid)

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)
  - [Petr Mikusek](http://github.com/xmikus01)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2011-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>

Copyright (c) 2014 Petr Mikusek