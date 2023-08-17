# Passport-Wink

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [Wink](http://wink.com) using the OAuth 2.0 API.

## Install

    $ npm install passport-wink

## Usage

#### Configure Strategy

The Wink authentication strategy authenticates users using a Wink
account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a client ID, client secret, and callback URL.

    passport.use(new WinkStrategy({
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        callbackURL : CALLBACK_URL
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ WinkId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authorize()`, specifying the `'Wink'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/wink',
      passport.authorize('wink'));

    app.get('/auth/wink/callback', 
      passport.authorize('wink', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Thanks

  - [Jared Hanson](http://github.com/jaredhanson)
  - [Michael Pearson](http://github.com/mjpearson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2015 tuddman <[http://github.com/tuddman](http://github.com/tuddman)>
