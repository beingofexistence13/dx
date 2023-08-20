# passport-identityua

[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/passport-identityua)
[![Build Status](https://travis-ci.org/poliveira89/passport-identityua.svg)](https://travis-ci.org/poliveira89/passport-identityua)
[![Coverage Status](https://coveralls.io/repos/poliveira89/passport-identityua/badge.svg?branch=master&service=github)](https://coveralls.io/github/poliveira89/passport-identityua?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/d20ac5ee14e1494a80716b7b16e637c8)](https://www.codacy.com/app/paulonascimento89/passport-identityua)
[![Code Climate](https://codeclimate.com/github/poliveira89/passport-identityua/badges/gpa.svg)](https://codeclimate.com/github/poliveira89/passport-identityua)
[![Dependencies](https://david-dm.org/poliveira89/passport-identityua.svg)](https://david-dm.org/poliveira89/passport-identityua)

[Passport](http://passportjs.org/) strategy for authenticating with [IdentityUA](http://identity.ua.pt/)
using the OAuth 1.0a API.

This module lets you authenticate using Universal User from University of Aveiro (UA) in your Node.js applications.

## Install

    $ npm install passport-identityua

## Usage

#### Configure Strategy

The IdentityUA authentication strategy authenticates users using a Universal User UA account
and OAuth tokens.  The strategy requires a `verify` callback, which receives the
access token and corresponding secret as arguments, as well as `profile` which
contains the authenticated user's UA profile. The `verify` callback must
call `done` providing a user to complete authentication.

In order to identify your application to IdentityUA, specify the consumer key,
consumer secret, callback URL and scope within `options`.  The consumer key and secret
are obtained by [creating an application](http://identity.ua.pt/oauth/apps) at
IdentityUA site.

    passport.use(new IdentityUaStrategy({
        consumerKey: IDENTITYUA_CONSUMER_KEY,
        consumerSecret: IDENTITYUA_CONSUMER_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/ua/callback"
      },
      function(token, tokenSecret, profile, done) {
        User.findOrCreate({ id: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### NOT READY
The following example demonstrastes the right usage of the `scope`, but be warned this still does not work as expected.

    passport.use(new IdentityUaStrategy({
        consumerKey: IDENTITYUA_CONSUMER_KEY,
        consumerSecret: IDENTITYUA_CONSUMER_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/ua/callback",
        scope: ['uu', 'name']
      },
      function(token, tokenSecret, profile, done) {
        User.findOrCreate({ id: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'identityua'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/ua',
      passport.authenticate('identityua'));
    
    app.get('/auth/ua/callback', 
      passport.authenticate('identityua', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Tests

    $ npm install
    $ npm test

## TODO

- [ ] Fix `scope` bug
- [ ] Fix "Strategy parsing error from access token endpoint parsing error should error" test (it's hardcoded to pass)
- [ ] Enable to parse XML and JSON by choice on `parse` function on `profile.js` 

## Credits

  - [Jared Hanson](http://github.com/jaredhanson) (developed the code before the fork)
  - [Paulo Oliveira](http://github.com/poliveira89)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2015 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
