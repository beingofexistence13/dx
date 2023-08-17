# passport-cloudup
[![Build Status](https://travis-ci.org/stevelacy/passport-cloudup.png?branch=master)](https://travis-ci.org/stevelacy/passport-cloudup)
[![NPM version](https://badge.fury.io/js/passport-cloudup.png)](http://badge.fury.io/js/passport-cloudup)

[Cloudup](https://cloudup.com) authentication for [Passport](http://passportjs.org)


This module is based off [passport-github](https://github.com/jaredhanson/passport-github/)

## Install

```bash
$ npm install passport-cloudup --save
```

## Usage

### Configure Strategy

Cloudup uses OAuth 2.0 tokens to authenticate a registered Cloudup user.
The returned `profile` contains the full Cloudup API user data.

```js

passport.use(new cloudupStrategy({
  clientID: clientID,
  clientSecret: clientSecret,
  callbackURL: "/auth/cloudup/callback"
},
function(accessToken, refreshToken, profile, done){

  User.findOrCreate({cloudupId: profile.id}, function (err, user) {
    return done(err, user);
  });

}));

```

### Authenticate Requests

Using `express` or connect-like middleware, specify the auth type of `cloudup`

```js

app.get('/auth/cloudup', passport.authenticate('cloudup'));

app.get('/auth/cloudup/callback',
  passport.authenticate('cloudup'), function(req, res){
    if (req.user){
      res.redirect('/');
    }
    else {
      res.redirect('/login');
    }
  }
);

```

## Examples

A full authentication example can be found [here](https://github.com/stevelacy/passport-cloudup/tree/master/examples)

## Tests

```bash
$ npm install --dev
$ npm test
```

## LICENSE [MIT](LICENSE)
