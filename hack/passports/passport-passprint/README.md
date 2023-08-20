# Passport-PassPrint

[Passport](http://passportjs.org/) strategies for authenticating with [PassPrint](https://www.passprint.me/)
using OAuth 2.0.

This module lets you authenticate using PassPrint in your Node.js applications.
By plugging into Passport, PassPrint authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-passprint

## Usage of OAuth 2.0

#### Configure Strategy

The PassPrint OAuth 2.0 authentication strategy authenticates users using an PassPrint
account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a client ID, client secret, and callback URL.

    passport.use(new PassPrintStrategy({
        clientID: PASSPRINT_CLIENT_ID,
        clientSecret: PASSPRINT_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/oauth2/passprint/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ passprintId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'passprint'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/oauth2/passprint',
      passport.authenticate('passprint'));

    app.get('/oauth2/passprint/callback',
      passport.authenticate('passprint', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [example](https://github.com/DFTinc/passport-passprint/example).

## Credits

  - [Diamond Fortress Technologies, Inc.](https://github.com/DFTinc/passport-passprint)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2015 <a href="http://www.diamondfortress.com">Diamond Fortress Technologies, Inc.</a>
