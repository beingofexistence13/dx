# Passport-Dailymotion

[Passport](http://passportjs.org/) strategy for authenticating with [Dailymotion](http://www.dailymotion.com/)
using OAuth 2.0.

This module lets you authenticate using Dailymotion in your Node.js applications.
By plugging into Passport, Dailymotion authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-dailymotion

#### Configure Strategy

The Dailymotion OAuth 2.0 authentication strategy authenticates users using a Dailymotion
account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a App ID, App secret, and callback URL.

```Javascript
var DailymotionStrategy = require('passport-dailymotion').Strategy;

passport.use(new DailymotionStrategy({
    clientID: DM_API_KEY,
    clientSecret: DM_API_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/dailymotion/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ dailymotionId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));
```

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'dailymotion'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

```Javascript
app.get('/auth/dailymotion',
  passport.authenticate('dailymotion'));

app.get('/auth/dailymotion/callback',
  passport.authenticate('dailymotion', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
```

## Credits
  - [Mathieu Amiot](http://github.com/OtaK) author of this library
  - [Jared Hanson](http://github.com/jaredhanson) for the awesome PassportJS library.

## License

[Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0)

Copyright (c) 2014 Mathieu Amiot <[http://mathieu-amiot.fr/](http://mathieu-amiot.fr/)>
