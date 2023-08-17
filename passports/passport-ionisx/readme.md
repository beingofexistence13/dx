# passport-ionisx [![Build status](https://circleci.com/gh/IONISx/passport-ionisx.svg?style=svg)](https://circleci.com/gh/IONISx/passport-ionisx)

[![Dependencies status](https://david-dm.org/IONISx/passport-ionisx.svg)](https://david-dm.org/IONISx/passport-ionisx)
[![Dev dependencies status](https://david-dm.org/IONISx/passport-ionisx/dev-status.svg)](https://david-dm.org/IONISx/passport-ionisx#info=devDependencies)
[![codecov](https://codecov.io/gh/IONISx/passport-ionisx/branch/master/graph/badge.svg)](https://codecov.io/gh/IONISx/passport-ionisx)
[![npm version](https://img.shields.io/npm/v/passport-ionisx.svg)](https://www.npmjs.com/package/passport-ionisx)

> [Passport](http://passportjs.org/) strategy for authenticating with
[IONISx](https://IONISx) using the OAuth 2.0 API.

## Description

This module lets you authenticate using IONISx in your Node.js applications.
By plugging into Passport, IONISx authentication can be easily and unobtrusively
integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

```shell
$ npm install passport-ionisx
```

## Usage

### Configure Strategy

The IONISx authentication strategy authenticates users using a IONISx account
and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which accepts
these credentials and calls `done` providing a user, as well as `options`
specifying a client ID, client secret, and callback URL.

```javascript
passport.use(
    new IonisxStrategy({
        clientID: IONISX_CLIENT_ID,
        clientSecret: IONISX_CLIENT_SECRET,
        callbackURL: 'http://127.0.0.1:3000/auth/ionisx/callback'
    },
    function (accessToken, refreshToken, profile, done) {
        User.findOrCreate({ ionisxId: profile.id }, function (err, user) {
            return done(err, user);
        });
    }
));
```

### Authenticate Requests

Use `passport.authenticate()`, specifying the `'ionisx'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

```javascript
app.get('/auth/ionisx',
    passport.authenticate('ionisx'));

app.get('/auth/ionisx/callback',
    passport.authenticate('ionisx', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    }
);
```

## Tests

```shell
$ npm install --dev
$ gulp test
```

## Development

Feel free to contribute :)

```
    ╚⊙ ⊙╝
  ╚═(███)═╝
 ╚═(███)═╝
╚═(███)═╝
 ╚═(███)═╝
  ╚═(███)═╝
   ╚═(███)═╝
```

![MIT](https://img.shields.io/badge/licence-MIT-blue.svg)
