# passport-mymlh

[Passport](http://passportjs.org/) strategy for authenticating with [MyMLH](https://my.mlh.io/)
using the OAuth 2.0 API.

This module lets you authenticate using MyMLH in your Node.js applications.
By plugging into Passport, MyMLH authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).


## Install

```bash
$ npm install passport-mymlh
```

## Usage

#### Create an Application

Before using `passport-mymlh`, you must register an application with MyMLH.
If you have not already done so, a new application can be created at
[developer applications](https://my.mlh.io/oauth/applications) within
MyMLH's My Apps panel.  Your application will be issued a client ID and client
secret, which need to be provided to the strategy.  You will also need to
configure a callback URL which matches the route in your application.

#### Configure Strategy

The MyMLH authentication strategy authenticates users using a MyMLH account
and OAuth 2.0 tokens.  The client ID and secret obtained when creating an
application are supplied as options when creating the strategy.  The strategy
also requires a `verify` callback, which receives the access token and optional
refresh token, as well as `profile` which contains the authenticated user's
MyMLH profile.  The `verify` callback must call `cb` providing a user to
complete authentication.

```js
var MyMLHStrategy = require('passport-mymlh').Strategy;

passport.use(new MyMLHStrategy({
    clientID: MYMLH_CLIENT_ID,
    clientSecret: MYMLH_SECRET,
    callbackURL: "http://localhost:8080/callback/mymlh"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ mymlhId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
```

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'mymlh'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

```js
// In my example this is equivalent to '/register' route
app.get('/auth/mymlh',
  passport.authenticate('mymlh'));

// In my example this is equivalent to '/callback/mymlh' route
app.get('/auth/mymlh/callback',
  passport.authenticate('mymlh', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
```

## Examples

Developers using [Express](http://expressjs.com/) can
look at [this example](https://scotch.io/tutorials/easy-node-authentication-setup-and-local). This tutorial provides many ways to authenticate users using passport with different strategies including local, Google, Facebook, and Twitter. It's a great starting point for developing web applications.

## Credit
[Jared Hanson](http://github.com/jaredhanson)
