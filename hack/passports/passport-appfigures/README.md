# passport-appfigures

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [App Figures](https://appfigures.com/) using the OAuth 1.0 API.

This module lets you authenticate using App Figures in your Node.js applications.
By plugging into Passport, App Figures authentication can be easily and unobtrusively
integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-appfigures

## Usage

#### Configure Strategy

The App Figures authentication strategy authenticates users using a App Figures
account and OAuth 2 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a client ID, client secret, and callback URL.

    passport.use(new AppFiguresStrategy({
        consumerKey: APPFIGURES_CLIENT_ID,
        consumerSecret: APPFIGURES_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/appfigures/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ appFiguresId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'appfigures'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/appfigures',
      passport.authenticate('appfigures'));

    app.get('/auth/appfigures/callback',
      passport.authenticate('appfigures', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/SpiderStrategies/passport-appfigures/tree/master/examples/login).

## Tests

    $ npm install
    $ npm test

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)
  - [Nathan Bowser](http://github.com/nathanbowser)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2014 Nathan Bowser <[http://nathanbowser.com/](http://nathanbowser.com/)>
