# passport-basecamp

**Adaption of [passport-github](https://github.com/jaredhanson/passport-github) by [@jaredhanson](https://github.com/jaredhanson)**

[Passport](http://passportjs.org/) strategy for authenticating with [Basecamp](https://basecamp.com/)
using the OAuth 2.0 API.

This module lets you authenticate using Basecamp in your Node.js applications.
By plugging into Passport, Basecamp authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

```bash
$ npm install passport-basecamp
```

## Usage

#### Create an Application

Before using `passport-basecamp`, you must register an application with Basecamp.
If you have not already done so, a new application can be created at
[Your Applications](https://launchpad.37signals.com/integrations).  Your application will be issued a client ID and client
secret, which need to be provided to the strategy.  You will also need to
configure a callback URL which matches the route in your application.

#### Configure Strategy

The Basecamp authentication strategy authenticates users using a Basecamp account
and OAuth 2.0 tokens.  The client ID and secret obtained when creating an
application are supplied as options when creating the strategy.  The strategy
also requires a `verify` callback, which receives the access token and optional
refresh token, as well as `profile` which contains the authenticated user's
Basecamp profile.  The `verify` callback must call `cb` providing a user to
complete authentication.

```js
var BasecampStrategy = require('passport-basecamp').Strategy;

passport.use(new BasecampStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/basecamp/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ basecampId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
```

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'basecamp'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

```js
app.get('/auth/basecamp',
  passport.authenticate('basecamp'));

app.get('/auth/basecamp/callback',
  passport.authenticate('basecamp', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
```

## Examples

Developers using the popular [Express](http://expressjs.com/) web framework can
refer to an [example](https://github.com/passport/express-4.x-facebook-example)
as a starting point for their own web applications.  The example shows how to
authenticate users using Facebook.  However, because both Facebook and Basecamp
use OAuth 2.0, the code is similar.  Simply replace references to Facebook with
corresponding references to Basecamp.

## Support

#### Funding

This software is provided to you as open source, free of charge.  The time and
effort to develop and maintain this project is dedicated by [@jaredhanson](https://github.com/jaredhanson).
If you (or your employer) benefit from this project, please consider a financial
contribution.  Your contribution helps continue the efforts that produce this
and other open source software.

Funds are accepted via [PayPal](https://paypal.me/jaredhanson), [Venmo](https://venmo.com/jaredhanson),
and [other](http://jaredhanson.net/pay) methods.  Any amount is appreciated.

## License

[The MIT License](http://opensource.org/licenses/MIT)
