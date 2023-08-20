# passport-untappd

[Passport](http://passportjs.org/) strategy for authenticating with [Untappd](https://untappd.com/) using the OAuth 2.0 API.

## Install

```
$ npm install passport-untappd
```

## Usage

### Configure Strategy

The Untappd authentication strategy authenticates users using an Untappd account and OAuth 2.0 tokens. The strategy requires a verify callback, which accepts these credentials and calls `done` providing a user, as well as `options` specifying an app ID, app secret, callback URL.

```js
passport.use(new UntappdStrategy({
  clientID: 'UNTAPPD_CLIENT_ID',
  clientSecret: 'UNTAPPD_CLIENT_SECRET',
  callbackURL: 'https://www.example.net/auth/untappd/callback'
}, function(accessToken, refreshToken, profile, done) {
  User.findOrCreate({ untappdId: profile.id }, function(err, user) {
    done(err, user);
  });
});
```

### Authenticate Requests

Use `passport.authenticate()`, specifying the `'untappd'` strategy, to authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/) application:

```js
app.get('/auth/untappd', passport.authenticate('untappd'));

app.get('/auth/untappd/callback',
  passport.authenticate('untappd', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
```

## Credit

- Created by Shuhei Kagawa.
- Based on [passport-facebook](https://github.com/jaredhanson/passport-facebook) by Jared Hanson.

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2015 Shuhei Kagawa
