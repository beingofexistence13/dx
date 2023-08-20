# passport-phantauth

[Passport](http://passportjs.org/) strategy for authenticating with [PhantAuth](https://www.phantauth.net/)
using the OpenID Connect API.

PhantAuth is a Random User Generator + OpenID Connect Provider.
Like Lorem Ipsum, but for user accounts and authentication.
PhantAuth was designed to simplify testing for applications using
OpenID Connect authentication by making use of random generated users.

This module lets you authenticate using PhantAuth in your Node.js applications.
By plugging into Passport, PhantAuth authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

For more information about PhantAuth, check 
[PhantAuth Developer Portal](https://www.phantauth.net).

## Installation

    $ npm install passport-phantauth

## Usage

### Configure Strategy

The PhantAuth authentication strategy authenticates users using a PhantAuth account
and OpenID Connect tokens. The strategy requires a `verify` callback, which accepts
these credentials and calls `done` providing a user, as well as `options`
specifying a client ID, client secret, and callback URL.

```javascript
const PhantAuthStrategy = require('passport-phantauth').Strategy;

passport.use(
  new PhantAuthStrategy(
    {
      clientID: client_id,
      clientSecret: client_secret,
      callbackURL: 'http://localhost:8888/auth/phantauth/callback'
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
      User.findOrCreate({ userId: profile.id }, function(err, user) {
        return done(err, user);
      });
    }
  )
);
```

### Authenticate Requests

Use `passport.authenticate()`, specifying the `'phantauth'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

```javascript
app.get('/auth/phantauth', passport.authenticate('phantauth'), function(req, res) {
  // The request will be redirected to PhantAuth for authentication, so this
  // function will not be called.
});

app.get(
  '/auth/phantauth/callback',
  passport.authenticate('phantauth', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);
```

### Using scopes

Depending on the data you want to fetch, you may want to specify OpenID Connect scopes. For more information about scopes check [OpenID Connect Core](https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims).

By default, all OpenID Connect scope is passed. That means that you fetch all information.

You can specify the parameters in the `authenticate` call:

```javascript
app.get(
  '/auth/phantauth',
  passport.authenticate('phantauth', {
    scope: ['profile', 'email']
  }),
  function(req, res) {
    // The request will be redirected to PhantAuth for authentication, so this
    // function will not be called.
  }
);
```

## Examples

For a complete, working example, check [Phantauth Sample Passport](https://phantauth-sample-passport.now.sh/) website. For source, refer to [GitHub repository](https://github.com/phantauth/phantauth-sample-passport)).

For a minimal, working example, refer to the [login example](https://github.com/phantauth/passport-phantauth/tree/master/examples/login).

## Tests

    $ npm install --dev
    $ make test

## License

based on [passport-spotify](https://github.com/JMPerez/passport-spotify) by José M. Pérez

[The MIT License](http://opensource.org/licenses/MIT)
