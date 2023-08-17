# Passport-Bong

> Copied from [Passport-github](https://github.com/jaredhanson/passport-github) by [Jared Hanson](http://github.com/jaredhanson)

[Passport](http://passportjs.org/) strategy for authenticating with [Bong](http://bong.cn/open/)
using the OAuth 2.0 API.

This module lets you authenticate using Bong in your Node.js applications.
By plugging into Passport, Bong authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-bong

## Usage

#### Configure Strategy

The Bong authentication strategy authenticates users using a Bong account
and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which accepts
these credentials and calls `done` providing a user, as well as `options`
specifying a client ID, client secret, and callback URL.

    passport.use(new BongStrategy({
        clientID: BONG_CLIENT_ID,
        clientSecret: BONG_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/bong/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ bongId: profile.uid }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'Bong'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/bong',
      passport.authenticate('bong'));

    app.get('/auth/bong/callback', 
      passport.authenticate('bong', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/junmer/passport-bong/tree/master/examples/login).

    $ git clone https://github.com/junmer/passport-bong
    $ cd passport-bong/examples/login && npm install 
    $ vi app.js //update BONG_CLIENT_ID, BONG_CLIENT_SECRET
    $ node app.js

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/junmer/passport-bong.png)](http://travis-ci.org/junmer/passport-bong)

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)
  - [junmer](http://github.com/junmer)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2011-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>

