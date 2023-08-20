# Passport-Odesk

[Passport](http://passportjs.org/) strategy for authenticating with [Odesk](https://www.odesk.com/)
using the OAuth 1.0a API.

This module lets you authenticate using Odesk in your Node.js applications.
By plugging into Passport, Odesk authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-odesk

## Usage

#### Configure Strategy

We need to get this keyes from Odesk [api](https://www.odesk.com/services/api/keys).
For example, I used this values:

    passport.use(new OdeskStrategy({
        consumerKey: 'f448b92c4aaf8918c0106bd164a1656',
        consumerSecret: 'e6a71b4f05467054',
        callbackURL: "http://127.0.0.1:3000/auth/odesk/callback"
      },
      function(token, tokenSecret, profile, done) {
        User.findOrCreate({ id: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'odesk'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/odesk',
      passport.authenticate('odesk'));
    
    app.get('/auth/odesk/callback',
      passport.authenticate('odesk', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [signin example](https://github.com/dglittle/passport-odesk/tree/master/examples/signin).



## Odesk Data Example
```

    {
        provider: 'odesk',
        id: 'John_Doe',
        name: { familyName: 'Doe', givenName: 'John' },
        ref: '3603850',
        displayName: 'John Doe',
        img: 'https://odesk-prod-portraits.s3.amazonaws.com/Users:johnDoe:PortraitUrl_50?AWSAccessKeyId=1XVAX3FNQZAFC9GJCFR2&Expires=2147483647&Signature=P7XYYyZr9c%2Bvv%2F25voKeTg92eFc%3D',
        country: 'Russia',
        profile: 'https://www.odesk.com/users/~johnDoe',
        emails: [ { value: 'JohnDoe@odesk.com', type: 'work' } ],
        timezone: 'Europe/Klin',
        timezone_offset: '14400',
        location: { city: 'Klin', state: '', country: 'Russia' },
        company_url: 'http://example.com'
    }

```

## Tests

Install vows first

```
    $ npm install vows
    $ npm test
```

Build status - [![Build Status](https://travis-ci.org/dglittle/passport-odesk.png?branch=master)](https://travis-ci.org/dglittle/passport-odesk)

## Credits

  - [Ostroumov Anatolij](https://github.com/vodolaz095)
  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2011-2013 Ostroumov Anatolij <[http://teksi.ru/resume/](http://teksi.ru/resume/)>

Based on Plugin <[https://github.com/jaredhanson/passport-twitter](https://github.com/jaredhanson/passport-twitter)>
by Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
