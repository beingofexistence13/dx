# Passport-Avalon
Node.js passport connector for Avalon OAuth servers, based on [mjpearson](http://github.com/mjpearson)'s wordpress passport connector.

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [Avalon Federated Login](http://avalonconsult.com/federated) using the OAuth 2.0 API.

## Install

    $ npm install passport-avalon
## Usage

#### Configure Strategy

The Avalon authentication strategy authenticates users using an Avalon login 
account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a client ID, client secret, and callback URL.

    passport.use(new AvalonStrategy({
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ AvalonId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authorize()`, specifying the `'Avalon'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/avalon',
      passport.authorize('avalon'));

    app.get('/auth/avalon/callback', 
      passport.authorize('avalon', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Thanks
  - Thanks to for the Wordpress OAuth 2 Passport connector - [mjpearson](http://github.com/mjpearson)
  - [Abe Becker](http://github.com/abembecker)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2014 Avalon Consulting LLC
