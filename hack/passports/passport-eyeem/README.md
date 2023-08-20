# Passport-Eyeem
Please note that all credits for this lib go to [Jared Hanson](http://github.com/jaredhanson) who wrote
the passport connector for Instagram. I basically only copied the code and replaced API endpoints and
the application name ;)

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [Eyeem](http://www.eyeem.com/) using the OAuth 2.0 API.

This module lets you authenticate using Eyeem in your Node.js applications.
By plugging into Passport, Eyeem authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-eyeem

## Usage

#### Configure Strategy

The Eyeem authentication strategy authenticates users using a Eyeem
account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a client ID, client secret, and callback URL.

    passport.use(new EyeemStrategy({
        clientID: EYEEM_CLIENT_ID,
        clientSecret: EYEEM_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/eyeem/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ instagramId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'eyeem'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/eyeem',
      passport.authenticate('eyeem'));

    app.get('/auth/eyeem/callback',
      passport.authenticate('eyeem', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/elmariachi111/passport-eyeem/tree/master/examples/login).

## Tests

    $ npm install --dev
    $ make test


## Credits

  - [Jared Hanson](http://github.com/jaredhanson) created the Instagram repo that this one is based on
  - [Stefan Adolf](http://github.com/elmariachi111) transformed the code to work with Eyeem

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2011-2013 Stefan Adolf

