# Passport-ConstantContact

[Passport](http://passportjs.org/) strategy for authenticating with [Constant Contact](http://www.constantcontact.com/)
using the OAuth 2.0 API.

This module lets you authenticate using Constant Contact in your Node.js applications.
By plugging into Passport, Constant Contact authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Usage

#### Configure Strategy

The Constant Contact authentication strategy authenticates users using a Constant Contact
account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a app ID, app secret, and callback URL.

    passport.use(new ConstantContactStrategy({
        clientID: CONSTANT_CONTACT_CLIENT_ID,
        clientSecret: CONSTANT_CONTACT_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/constantcontact/callback"
      }, function (accessToken, refreshToken, profile, done) {
        User.findOrCreate({ constantContactUsername: profile.user_name }, function(err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'constantcontact'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/constantcontact', passport.authenticate('constantcontact'));

    app.get('/auth/constantcontact/callback',
      passport.authenticate('constantcontact', { failureRedirect: '/login' }),
      function(req, res) {
        // Successul authentication, redirect home.
        res.redirect('/');
      });

## Credits

Created by [Brian Falk](http://github.com/brainflake)

Code based on passport-facebook by [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)
