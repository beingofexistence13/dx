# Passport-Beatport.com

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [Beatport](http://www.beatport.com) using the OAuth 1.0 API.

## Install

    $ npm install passport-beatport

## Usage

#### Configure Strategy

    var BeatportStartegy = require('passport-beatport').Strategy;

    passport.use(new BeatportStartegy({
        consumerKey: EXAMPLE_CONSUMER_KEY,
        consumerSecret: EXAMPLE_CONSUMER_SECRET, 
        callbackURL: 'https://www.example.net/auth/beatport/callback'
      },
      function(token, tokenSecret, profile, done) {
        User.findOrCreate(..., function (err, user) {
          done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'beatport'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/beatport',
      passport.authenticate('beatport'));
    
    app.get('/auth/beatport/callback', 
      passport.authenticate('beatport', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Credits

  - [John Kernke](http://github.com/johnkernke)
  - [Jared Hanson](https://github.com/jaredhanson/passport-twitter)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Jakub Jelen
