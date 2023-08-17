# Passport strategy for Jawbone UP OAuth 2.0

[Passport](http://passportjs.org/) strategies for authenticating with [Jawbone](https://jawbone.com/up)
using OAuth 2.0.

This module authenticates Jawbone in a Node.js [Express](http://expressjs.com/) server applications. 


## Install

    $ npm install passport-jawbone

## Usage of OAuth 2.0

#### Configure Strategy

The Jawbone UP OAuth 2.0 authentication strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`profile` specifying a client ID, client secret, and callback URL.

```
var JawboneStrategy = require('passport-jawbone').Strategy;

passport.use(new JawboneStrategy({
    clientID     : JAWBONE_CLIENT_ID,
    clientSecret : JAWBONE_CLIENT_SECRET,
    callbackURL  : CALLBACK_URL,
    passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
  },
  function(req, token, refreshToken, profile, done) {
    User.findOrCreate({ jawboneId: profile.meta.user_xid }, function (err, user) {
      return done(err, user);
    });
  }
));
```

#### Authorize Requests

Use `passport.authorize()`, specifying the `'jawbbone'` strategy, to
authorize requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

```
app.get('/auth/jawbone', passport.authorize('jawbone', { scope : 'move_read' }));

app.get('/auth/jawbone/callback',
		  passport.authorize('jawbone', {
		    scope: ['move_read'],
		    failureRedirect: '/auth/jawbone/failure'
		  }), function(req, res) {
		    res.redirect('/auth/jawbone/success');
		  }
		);
```
