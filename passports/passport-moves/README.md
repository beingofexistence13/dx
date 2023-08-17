# passport-moves

[![Build Status](https://travis-ci.org/billglover/passport-moves.svg?branch=master)](https://travis-ci.org/billglover/passport-moves)

[Passport](http://passportjs.org/) strategy for authenticating with [Moves](https://www.moves-app.com/)
using the OAuth 2.0 API.

This module lets you authenticate using Facebook in your Node.js applications.
By plugging into Passport, Facebook authentication can be easily and
unobtrusively integrated into [Express](http://expressjs.com/).

## Install

    $ npm install passport-moves

## Usage

#### Configure Strategy

The Moves authentication strategy authenticates users using the Moves mobile 
app and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a clientID, a clientSecret, and a callback URL.

    passport.use(new MovesStrategy({
        clientID: 'YOUR_CLIENT_ID',
        clientSecret: 'YOUR_CLIENT_SECRET',
        callbackURL: 'http://your.site/auth/callback'
      },
      function(accessToken, refreshToken, profile, done) {
        process.nextTick(function() {
          return done(null, profile);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'moves'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/moves/auth', 
      passport.authenticate('moves', {scope: ['default', 'activity', 'location']}));

    app.get('/moves/auth/callback', 
      passport.authenticate('moves', { successRedirect: '/success', failureRedirect: '/failure' }));

#### Profile Fields

The Moves profile is very sparse and only the `profile.id` field is populated.

## Tests

    $ npm install
    $ npm test

## License

[The MIT License](http://opensource.org/licenses/MIT)

## Acknowledgements
I'd like to thank [Jared Hanson](https://github.com/jaredhanson) for his work on the [passport-facebook](https://github.com/jaredhanson/passport-facebook) and [passport-instagram](https://github.com/jaredhanson/passport-instagram) strategies. In many places, this module re-uses his work.
