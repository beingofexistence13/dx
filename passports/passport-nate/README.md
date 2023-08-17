passport-nate
=============

Nate (네이트/싸이월드) authentication strategy for Passport.

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [Nate](https://nate.com/) or [Cyworld](http://www.cyworld.com) using the 
OAuth 1.0a API.

This module lets you authenticate using Nate in your Node.js applications.
By plugging into Passport, Nate authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-nate

## Usage

#### Configure Strategy

The Nate authentication strategy authenticates users using a Nate
account and OAuth tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a consumer key, consumer secret, and callback URL.

    passport.use(new NateStrategy({
        consumerKey: NATE_CONSUMER_KEY,
        consumerSecret: NATE_CONSUMER_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/nate/callback"
      },
      function(token, tokenSecret, profile, done) {
        User.findOrCreate({ nateId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

Consumer key and secret can be managed in [Nate Dev Square](http://devsquare.nate.com/OpenApi/ListConsumerKey).

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'nate'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/nate',
      passport.authenticate('nate'));

    app.get('/auth/nate/callback', 
      passport.authenticate('nate', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/pukapukan/passport-nate/tree/master/examples/login).

## Credits

  - [Jason Park](http://github.com/pukapukan)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2013 Jason Park
