# passport-uservoice

[Passport](http://passportjs.org/) strategy for authenticating with [Smart Sheets](http://uservoice.com/)
using the OAuth 1.0a API.

This module lets you authenticate using Smart Sheets in your Node.js applications.
By plugging into Passport, Smart Sheets authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-uservoice

## Usage

#### Configure Strategy

    passport.use(new UserVoiceStrategy({
    		subdomain : SUBDOMAIN,
        consumerKey : USERVOICE_CLIENT_KEY,
        consumerSecret: USERVOICE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/uservoice/callback"
      },
      function(token, tokenSecret, profile, done) {
        User.findOrCreate({ uservoiceId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'uservoice'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/uservoice', passport.authenticate('uservoice', { subdomain : SUBDOMAIN }));

    app.get('/auth/uservoice/callback',
      passport.authenticate('uservoice', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## License

[The MIT License](http://opensource.org/licenses/MIT)
