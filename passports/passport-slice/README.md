# Passport-Slice

[Passport](http://passportjs.org/) strategy for authenticating with [Slice](https://www.slice.com/)
using the OAuth 2.0 API.

This module lets you authenticate using Slice in your Node.js applications.
By plugging into Passport, Slice authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/). The included example lets you quickly set up
a test server with Express 4 that uses Slice for authentication.

## Install

    $ npm install passport-slice

## Usage

#### Configure Strategy

The Slice authentication strategy authenticates users using a Slice account
and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which accepts
these credentials and calls `done` providing a user, as well as `options`
specifying a client ID, client secret, and callback URL.

    passport.use(new SliceStrategy({
        clientID: SLICE_CLIENT_ID,
        clientSecret: SLICE_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/slice/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({userEmail: profile.userEmail}, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'slice'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/slice',
      passport.authenticate('slice'));

    app.get('/auth/slice/callback', 
      passport.authenticate('slice', {failureRedirect: '/login'}),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/rustinpc/passport-slice/tree/master/examples/login).

## Tests

    $ npm install --dev
    $ make test

## Credits

  - [Rustin Crandall](https://github.com/rustinpc)

## Credits

  - [Jared Hanson](https://github.com/jaredhanson)  
  This strategy is based off of Jared Hanson's [passport-github](https://github.com/jaredhanson/passport-github).
  - Thank you for support from [Robert Niimi](https://github.com/robertn702), [Krystal Raphael](https://github.com/Kdr18702), and [Dustin Sinkey](https://github.com/dsinkey).

## License

[The MIT License](http://opensource.org/licenses/MIT)
