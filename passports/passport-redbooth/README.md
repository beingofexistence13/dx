# passport-redbooth

[Passport](http://passportjs.org/) strategy for authenticating with [Smart Sheets](http://redbooth.com/)
using the OAuth 1.0a API.

This module lets you authenticate using Smart Sheets in your Node.js applications.
By plugging into Passport, Smart Sheets authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-redbooth

## Usage

#### Configure Strategy

    passport.use(new RedboothStrategy({
        consumerKey : REDBOOTH_CLIENT_KEY,
        consumerSecret: REDBOOTH_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/redbooth/callback"
      },
      function(token, tokenSecret, profile, done) {
        User.findOrCreate({ redboothId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'redbooth'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/redbooth',
      passport.authenticate('redbooth'));

    app.get('/auth/redbooth/callback',
      passport.authenticate('redbooth', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## License

[The MIT License](http://opensource.org/licenses/MIT)
