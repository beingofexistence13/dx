# passport-misfit

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [Misfit](http://misfit.com/) using the OAuth 2.0 API.

See https://build.misfit.com/ for developer portal. You must apply for API access.

## Install

    $ npm install passport-misfit

## Usage

#### Configure Strategy

`clientID`, `clientSecret`, `callbackURL`, and `scope` are all required. According to Misfit documentation, setting scope to `public, birthday, email` will request all permissions for now.

**note**: Misfit currently does not provide a refreshToken in its response. It will be `undefined`

    passport.use(new MisfitStrategy({
        clientID: YOUR_MISFIT_APP_ID,
        clientSecret: YOUR_MISFIT_APP_SECRET,
        callbackURL: "http://localhost:3000/auth/misfit/callback",
        scope: [
            'public',
            'birthday',
            'email'
        ]
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ misfitUserId: profile.userId }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'misfit'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/misfit',
      passport.authenticate('misfit'));

    app.get('/auth/misfit/callback', 
      passport.authenticate('misfit', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Tests

    $ npm install
    $ npm test

## Credits

  - [Chris Quartier](http://github.com/cquartier)
  - [Jared Hanson](http://github.com/jaredhanson) for his work on other passport-* libraries, making this one easier to create

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2014 Chris Quartier
