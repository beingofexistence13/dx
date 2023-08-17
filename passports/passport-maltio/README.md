# Passport-Maltio

[Passport](http://passportjs.org/) strategies for authenticating with [Malt.io](http://www.malt.io/)
using OAuth 2.0.

This module lets you authenticate using Malt.io in your Node.js applications.
By plugging into Passport, Malt.io authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-maltio

## Usage

### Configure Strategy

The Malt.io OAuth 2.0 authentication strategy authenticates users using a Malt.io
account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a client ID, client secret, and callback URL.

```javascript
var MaltioStrategy = require('passport-maltio');

passport.use(new MaltioStrategy({
    clientID: MALTIO_CLIENT_ID,
    clientSecret: MALTIO_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/maltio/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ externalId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));
```

### Authenticate Requests

Use `passport.authenticate()`, specifying the `'maltio'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

```javascript
app.get('/auth/maltio',
  passport.authenticate('maltio'));

app.get('/auth/maltio/callback', 
  passport.authenticate('maltio', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
```

Now, to log in a user

## Examples

For a complete, working example, refer to the [example](https://github.com/homebrewing/passport-maltio/tree/master/example) directory.

## Credits

  - [Daniel G. Taylor](http://github.com/danielgtaylor)
  - Heavily based on examples by [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Daniel G. Taylor
