# passport-daccount

[Passport](http://passportjs.org/) strategy for authenticating with Docomo dAccount using the OAuth 2.0 API.

This module lets you authenticate using Docomo dAccount in your Node.js applications.
By plugging into Passport, Docomo dAccount authentication can be easily and unobtrusively integrated into any application or framework that supports [Connect](http://www.senchalabs.org/connect/)-style middleware, including [Express](http://expressjs.com/).

## Install

    $ npm install passport-daccount

## Usage

#### Configure Strategy

The Docomo dAccount authentication strategy authenticates users using a Docomo account and OAuth 2.0 tokens. The app ID and secret obtained when creating an application are supplied as options when creating the strategy. The strategy
also requires a `verify` callback, which receives the access token and optional refresh token, as well as `profile` which contains the authenticated user's Docomo dAccount profile. The `verify` callback must call `cb` providing a user to complete authentication.

```js
passport.use(new DAccountStrategy({
    clientID: DACCOUNT_APP_ID,
    clientSecret: DACCOUNT_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/daccount/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ dAccountId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
```

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'daccount'` strategy, to authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/) application:

```js
app.get('/auth/daccount',
  passport.authenticate('daccount'));

app.get('/auth/daccount/callback',
  passport.authenticate('daccount', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
```

## Tests

    $ npm install --dev
    $ npm test

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)
  - [Auth0](https://auth0.com/)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
