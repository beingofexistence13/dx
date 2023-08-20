# passport-ucoz

## Install

    $ npm install passport-ucoz

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'ucoz'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/ucoz',
      passport.authenticate('ucoz'));
    
    app.get('/auth/ucoz/callback', 
      passport.authenticate('ucoz', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

    passport.use(new UcozStrategy({
        consumerKey: UCOZ_CONSUMER_KEY,
        consumerSecret: UCOZ_CONSUMER_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/ucoz/callback"
      },
      function(req, accessToken, tokenSecret, profile, done) {
        User.findOrCreate({ userId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

## Tests

    $ npm install
    $ npm test

## Credits

  - [Maxim Jarusov](https://github.com/l0gd0g)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2015 Maxim Jarusov
