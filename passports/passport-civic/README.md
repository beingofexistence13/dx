# passport-civic

[Passport](http://passportjs.org/) strategy for authenticating with [Civic](https://www.civic.com/)

This module lets you authenticate using Civic in your Node.js applications.
By plugging into Passport, Civic authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-civic

## Usage

#### Configure Strategy

The Civic authentication strategy authenticates users using a Civic
app.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a appId, prvKey, and appSecret.

    passport.use(new CivicStrategy({
        appId: APP_ID,
        prvKey: PRIVATE_KEY,
        appSecret: "Something-secret"
      },
      function(profile, done) {
        User.findOrCreate({ civicId: profile.userId }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Parameters

The verify callback can be supplied with the `request` object by setting
the `passReqToCallback` option to true, and changing callback arguments
accordingly.

    passport.use(new CivicStrategy({
        appId: APP_ID,
        prvKey: PRIVATE_KEY,
        appSecret: "Something-secret"
        passReqToCallback: true
      },
      function(req, profile, done) {
        // request object is now first argument
        // ...
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'civic'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/civic',
      passport.authenticate('civic'));

    app.get('/auth/civic',
      passport.authenticate('civic', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Credits

  - [Vinay Agarwal](http://github.com/vinay035)
  - [Kartik Mandaville](http://github.com/kar2905)

## License

[The MIT License](http://opensource.org/licenses/MIT)
