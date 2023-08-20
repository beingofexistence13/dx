# passport-redgate

A passport provider for Red Gate ID.  There is a full working express app in the example directory.

[![Build Status](https://img.shields.io/travis/ForbesLindesay/passport-redgate/master.svg)](https://travis-ci.org/ForbesLindesay/passport-redgate)
[![Dependency Status](https://img.shields.io/david/ForbesLindesay/passport-redgate.svg)](https://david-dm.org/ForbesLindesay/passport-redgate)
[![NPM version](https://img.shields.io/npm/v/passport-redgate.svg)](https://www.npmjs.com/package/passport-redgate)

## Installation

    npm install passport-redgate

## Example

```js
var RedGateStrategy = require('passport-redgate')

passport.use(new RedGateStrategy({
    returnURL: 'http://localhost:3000/login',
    realm: 'http://localhost:3000/'
  },
  function(user, done) {
    //user has {id: '<guid>', openID: '<uri>'}
    User.findByOpenID({ openId: user.openID }, function (err, user) {
      return done(err, user);
    });
  }
));


app.get('/login', passport.authenticate('redgate'), function(req, res){
  // Successful authentication, redirect home.
  res.redirect('/');
});
```


## Example with e-mail

```js
var RedGateStrategy = require('passport-redgate')

passport.use(new RedGateStrategy({
    auth: {user: 'username', pass: 'password'},
    returnURL: 'http://localhost:3000/login',
    realm: 'http://localhost:3000/'
  },
  function(user, done) {
    //user has {id: '<guid>', openID: '<uri>',
    //          emailAddress: 'foo@red-gate.com',
    //          emailAddressConfirmed: true}
    done(user)
  }
));


app.get('/login', passport.authenticate('redgate'), function(req, res){
  // Successful authentication, redirect home.
  res.redirect('/');
});
```

## License

  MIT