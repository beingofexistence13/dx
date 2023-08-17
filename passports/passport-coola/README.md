# passport-coola


[Passport](http://passportjs.org/) strategy for authenticating with cookies.

This module lets you authenticate using a cooladata access token in your Node.js
applications.  By plugging into Passport, coola authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-coola

## Usage

#### Configure Strategy

The coola authentication strategy authenticates users using cooladata access token.  The strategy requires a `verify` callback, which accepts these
credentials and calls `done` providing a user.

    passport.use(new CoolaStrategy(
      function(token, done, req) {
      	Auth.verifyToken(token, function (err, user) {
          if (err) { return done(err); }
          if (!user) { return done(null, false); }
          return done(null, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'coola'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth', 
      passport.authenticate('coola'),
      function(req, res) {
        res.redirect('/');
      });


## Tests

    $ npm install
    $ npm test

## Credits

  - [Eugene Brodsky](http://github.com/fupslot)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2014 CoolaData <[http://www.cooladata.com/](http://www.cooladata.com/)>
