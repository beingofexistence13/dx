# passport-ifmosso

[Passport](http://passportjs.org/) strategy for authenticating via [ITMO University Single Sign-On](https://de.ifmo.ru/IfmoSSO/).

## Install

    $ npm install passport-ifmosso

## Usage

#### Configure Strategy

The authentication strategy authenticates users using ITMO University account. 
The strategy requires a `verify` callback, which accepts these credentials and 
calls `done` providing a user.

    passport.use(new IfmoSSOStrategy({
            secretKey: SECRET_KEY
        }, function(profile, done) {
            User.findOrCreate(..., function (err, user) {
                done(err, user);
            });
        }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'ifmosso'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.post('/auth/callback',
        passport.authenticate('ifmosso', {
            successRedirect: '/',
            failureRedirect: '/login'
        })
    );

## Tests

    $ npm install
    $ npm test

## Credits

  - [Anton Skshidlevsky](http://github.com/meefik)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2015 Anton Skshidlevsky
