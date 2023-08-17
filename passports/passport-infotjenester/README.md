# passport-infotjenester
[![Build Status](https://travis-ci.org/itasdesk/passport-infotjenester.svg?branch=master&style=flat-square)](https://travis-ci.org/itasdesk/passport-infotjenester)
[![npm](https://img.shields.io/npm/dt/passport-infotjenester.svg?style=flat-square)](https://www.npmjs.com/package/passport-infotjenester)
[![npm](https://img.shields.io/npm/v/passport-infotjenester.svg?style=flat-square)](https://www.npmjs.com/package/passport-infotjenester)

Infotjenester authentication strategy for [Passport](http://passportjs.org/)

This module lets you authenticate using Infotjenester SSO in your Node.js applications. By plugging into Passport, Infotjenester authentication can be easily and unobtrusively integrated into any application or framework that supports Connect-style middleware, including Express.

##Install

```shell
npm install passport-infotjenester
```

##Usage

####Create an Application

Before using passport-infotjenester, you must register an application with Infotjenester. Your application will be issued a client api-key, which need to be provided to the strategy. You will also need to configure a redirect URI which matches the route in your application.

####Configure Strategy

The Infotjenester authentication strategy authenticates users using an Infotjenester account. The client api-key obtained when creating an application is supplied as option when creating the strategy. The strategy also requires a `verify` callback, which receives the `profile` which contains the authenticated user's Infotjenester profile. The `verify` callback must call cb providing a user to complete authentication. You will also be able to send in a `vendor` to differentiate between the vendors.

```js
const ItasStategy = require('passport-infotjenester').Strategy;

passport.use(new ItasStategy({
    clientApiKey: INFOTJENESTER_CLIENT_API_KEY,
    callbackURL: "http://localhost:3000/auth/infotjenester/callback",
    passReqToCallback: true //this is optional -> defaults to false
    vendor: 2 //this is optional -> defaults to 1
  },
  function(req /* <-- depends on passReqToCallback */, profile, cb) {
    User.findOrCreate({ userId: profile.UserGuid }, function (err, user) {
      return cb(err, user);
    });
  }
));
```

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'infotjenester'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

```js
app.get('/auth/infotjenester',
  passport.authenticate('infotjenester'));

app.get('/auth/infotjenester/callback',
  passport.authenticate('infotjenester', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
```

## License

[The MIT License](http://opensource.org/licenses/MIT)
Copyright (c) Carsten Jacobsen
