# Passport-Stash

[![NPM](https://nodei.co/npm/passport-stash.png)](https://nodei.co/npm/passport-stash/)

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [Stash](https://www.atlassian.com/software/stash/) using the OAuth 1.0a API.

This module lets you authenticate using Stash in your Node.js applications.
By plugging into Passport, Stash authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-stash

## Usage

#### Configure Strategy

The Stash authentication strategy authenticates users using a Stash
account and OAuth tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a consumer key, consumer secret, and callback URL.


    passport.use(new StashStrategy({
        consumerKey: STASH_CONSUMER_KEY,
        consumerSecret: STASH_CONSUMER_SECRET,
        apiURL: "http://api.example.com",
        callbackURL: "http://127.0.0.1:3000/auth/stash/callback"
      },
      function(token, tokenSecret, profile, done) {
        User.findOrCreate({ stashId: profile.username }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'stash'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/stash',
      passport.authenticate('stash'));

    app.get('/auth/stash/callback',
      passport.authenticate('stash', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/reinbach/passport-stash/tree/master/examples/login).

## Tests

    $ npm install --dev
    $ make test


## Credits

  - [Greg Reinbach](http://github.com/reinbach)
  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2015 Greg Reinbach <[http://reinbach.com/](http://reinbach.com/)>
