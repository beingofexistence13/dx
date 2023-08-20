# Passport-lyft

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating with [Lyft](http://www.lyft.com/) using the OAuth 2.0 API.

This module lets you authenticate using Lyft in your Node.js [Express](http://expressjs.com/) (or [Connect](http://www.senchalabs.org/connect/)) server applications.

## Install

```bash
$ npm install passport-lyft
```

## Usage

#### Configure Strategy

The Lyft authentication strategy authenticates users using an Lyft account and OAuth tokens. The strategy requires a `verify` callback, which accepts these credentials and calls `done` providing a user, as well as `options` specifying a client id , client secret, and callback URL.

```javascript
var lyftStrategy = require('passport-lyft').Strategy;

passport.use(new lyftStrategy({
    clientID: LYFT_CLIENT_ID,
    clientSecret: LYFT_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/callback',
    state: true
  },
  function(accessToken, refreshToken, profile, done) {
    var user = profile;
    user.accessToken = accessToken;
    return done(null, user);
  }
));
```



#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'lyft'` strategy, to authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/) application:

```javascript
app.get('/auth/lyft',
  passport.authenticate('lyft', { scope: ['public','profile'] }
));

app.get('/callback', passport.authenticate('lyft', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
});
```



## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2016 Tomomi ❤ Imura <[http://girliemac.com](http://girliemac.com)>
