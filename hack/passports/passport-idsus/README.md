# passport-idsus (SUSConectaLogin)

[![Build Status](https://travis-ci.org/saviogl/passport-idsus.svg?branch=master)](https://travis-ci.org/saviogl/passport-idsus)
[![Code Climate](https://codeclimate.com/github/saviogl/passport-idsus/badges/gpa.svg)](https://codeclimate.com/github/saviogl/passport-idsus)
[![Test Coverage](https://codeclimate.com/github/saviogl/passport-idsus/badges/coverage.svg)](https://codeclimate.com/github/saviogl/passport-idsus/coverage)
[![Dependencies](https://david-dm.org/saviogl/passport-idsus.svg)](https://david-dm.org/saviogl/passport-idsus)


[Passport](http://passportjs.org/) strategy for authenticating with [SUSConectaLogin](https://login.susconecta.org.br/login/?next=/edit/).

This module lets you authenticate using IdSUS in your Node.js applications.
By plugging into Passport, IdSUS authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-idsus

## Usage

#### Create an Application

Before using `passport-idsus`, you must register an application with SUSConectaLogin. Your application will be issued an app ID and app secret, which need to be provided to the strategy. You will also need to configure a redirect URI which matches the route in your application.

#### Configure Strategy

The SUSConectaLogin authentication strategy authenticates users using a SUSConectaLogin account and OAuth 2.0 tokens. The app ID and secret obtained when creating an application are supplied as options when creating the strategy. The strategy also requires a `verify` callback, which receives the access token and some other informations including a `user`which contains the authenticated user's SUSConectaLogin profile. The `verify` callback must call `cb` providing a user to complete authentication.

```js
passport.use(new IdSUSStrategy({
    loginURL: SUSCONECTALOGIN_HOST,
    apiURL: SUSCONECTALOGIN_API,
    clientID: SUSCONECTALOGIN_APP_CLIENTID,
    clientSecret: SUSCONECTALOGIN_APP_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/idsus/callback" // Must match the callback registered in the app
  },
  function(accessToken, tokenType, expiresIn, refreshToken, scope, user, cb) {
    User.findOrCreate({ email: user.email }, function (err, user) {
      return cb(err, user);
    });
  }
));
```

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'idsus'` strategy, to authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

```js
app.get('/auth/idsus',
  passport.authenticate('idsus'));

app.get('/auth/idsus/callback',
  passport.authenticate('idsus', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
```

## Contributing

#### Tests

The test suite is located in the `test/` directory.  All new features are
expected to have corresponding test cases. Ensure that the complete test suite
passes by executing:

```bash
$ npm test
```

#### Coverage

The test suite covers 100% of the code base. All new feature development is
expected to maintain that level.  Coverage reports can be viewed by executing:

```bash
$ npm run coverage
$ npm run open-coverage
```

## License

[The MIT License](http://opensource.org/licenses/MIT)
