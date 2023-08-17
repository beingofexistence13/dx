# passport-authtoken


[Passport](http://passportjs.org/) strategy for authenticating with a auth token and others

This module lets you authenticate using a authentication token and some phrase in your Node.js
applications.  By plugging into Passport, local authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-authtoken

## Usage

#### Configure Strategy

The auth token authentication strategy authenticates users using a auth token and
some phrase.  The strategy requires a `verify` callback, which accepts these
credentials and calls `done` providing a user.

    passport.use(new LocalStrategy(
      { checkFields: ['pinNumber'] },
      function(token, pinNumber, done) {
        User.findOne({ token: token }, function (err, user) {
          if (err) { return done(err); }
          if (!user) { return done(null, false); }
          if (!user.verifyPinNumber(pinNumber)) { return done(null, false); }
          return done(null, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'authtoken'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.post('/login', 
      passport.authenticate('authtoken', { failureRedirect: '/login' }),
      function(req, res) {
        res.redirect('/');
      });

## Examples

For complete, working examples, refer to the multiple [examples](https://github.com/horiuchi/passport-authtoken/tree/master/examples) included.

## Tests

    $ npm install
    $ npm test

## Credits

  - [Hiroki Horiuchi](http://github.com/horiuchi)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2014 Hiroki Horiuchi <[https://github.com/horiuchi](http://github.com/horiuchi)>
