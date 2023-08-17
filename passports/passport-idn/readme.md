# passport-idn [![CircleCI](https://circleci.com/gh/tusbar/passport-idn.svg?style=svg)](https://circleci.com/gh/tusbar/passport-idn)

> [Passport](http://passportjs.org/) strategy for authenticating with [La Poste IDN](https://developpeurs.idn.laposte.fr) using the OAuth 2.0 API.

[![npm version](https://badgen.net/npm/v/passport-idn)](https://www.npmjs.com/package/passport-idn)
[![dependencies Status](https://badgen.net/david/dep/tusbar/passport-idn)](https://david-dm.org/tusbar/passport-idn)
[![codecov](https://badgen.net/codecov/c/github/tusbar/passport-idn)](https://codecov.io/gh/tusbar/passport-idn)
[![XO code style](https://badgen.net/badge/code%20style/XO/cyan)](https://github.com/xojs/xo)

This module lets you authenticate using La Poste IDN (Identité Numérique) in your Node.js applications.  By plugging into Passport, IDN authentication can be easily and unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including [Express](http://expressjs.com/).

## Getting started

```bash
$ npm install passport-idn
```

## Usage

#### Configure Strategy

The IDN authentication strategy authenticates users using a IDN account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which accepts these credentials and calls `done` providing a user, as well as `options` specifying a client ID, client secret, and callback URL.

```js
const IdnStrategy = require('passport-idn')

passport.use(
  new IdnStrategy({
    clientID: IDN_CLIENT_ID,
    clientSecret: IDN_CLIENT_SECRET,
    callbackURL: 'http://127.0.0.1:3000/auth/idn/callback'
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOrCreate({ idnId: profile.id }, (err, user) => {
      return done(err, user)
    })
  })
)
```

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'idn'` strategy, to authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/) application:

```js
app.get('/auth/idn', passport.authenticate('idn'))

app.get(
  '/auth/idn/callback',
  passport.authenticate('idn', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/')
  }
)
```

## License

MIT


## Miscellaneous

```
    ╚⊙ ⊙╝
  ╚═(███)═╝
 ╚═(███)═╝
╚═(███)═╝
 ╚═(███)═╝
  ╚═(███)═╝
   ╚═(███)═╝
```
