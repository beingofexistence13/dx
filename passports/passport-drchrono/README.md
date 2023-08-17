# passport-drchrono

[Passport](http://passportjs.org/) strategy for [drchrono](https://www.drchrono.com/api/) authentication.

This module lets you authenticate with drchrono in your Node.js
applications.  By plugging into Passport, drchrono authentication
can be easily and unobtrusively integrated into any application or framework that supports 
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

```bash
    $ npm install @nimblr/passport-drchrono
```

## Usage

#### Create an Application

Before using `passport-drchrono`, you must register an application with drchrono.
Your application will be issued a client ID and a client secret.
These are required in order to authenticate your app with drchrono. You will also need
to register your different redirect URIs authorized for your application. Visit
the [drchrono tutorial](https://www.drchrono.com/api-docs/tutorial) for more information.

#### Configure Strategy

The drchrono authentication strategy authenticates users using a drchrono account
and OAuth 2.0 tokens. The client ID and secret are obtained when you create your application
in the drchrono portal.

The strategy requires a `verify` callback which receives the access token, an optional refresh token,
a profile with the authenticated user information, and a callback.
The `verify` callback must call the passed callback with the user information to complete the authentication process.

```js
    var DrchronoStrategy = require('@nimblr/passport-drchrono').Strategy
    
    passport.use(new DrchronoStrategy({
            clientID: 'abcdefgxs023934',
            clientSecret: 'assdfco09sdXDAdg9cxaaSASDF90asdgf0asdvc',
            callbackURL: 'https://www.example.net/auth/drchrono/callback'
        },
        function(accessToken, credentials, profile, cb) {
            User.findOrCreate(..., function (err, user) {
                done(err, user);
            });
        }
    ));
```
    
The verify callback can be supplied with the `request` object by setting the `passReqToCallback` option to true, and
changing the callback arguments accordingly.

```js
    passport.use(new DrchronoStrategy({
            clientID: 'abcdefgxs023934',
            clientSecret: 'assdfco09sdXDAdg9cxaaSASDF90asdgf0asdvc',
            callbackURL: 'https://www.example.net/auth/drchrono/callback',
            passReqToCallback: true
        },
        function(req, accessToken, credentials, profile, cb) {
            // ...
        }
    ));
```

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'drchrono'` strategy, to
pass authentication of a request.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

```js
    app.post('/auth/drchrono',
      passport.authenticate('drchrono', { 
        clientID: CLIENT_ID, 
        clientSecret: CLIENT_SECRET, 
        callbackURL: REDIRECT_URI }));
    
    app.post('/auth/drchrono/callback', 
      passport.authenticate('drchrono', { /* credentials */ }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });
```

## Contributing

#### Tests

The test suite is located in the `test/` directory. 

```bash
    $ npm test
```

#### Coverage
All new feature or patch is expected to have test coverage. Patches that increase test coverage are
happily accepted. Coverage reports can be viewed by executing:

```bash
    $ npm run test-cov
    $ npm run view-cov
```

## Credits

  - [David Jiménez](https://github.com/DJphilomath)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2016 Nimblr.ai <[https://nimblr.ai/](https://nimblr.ai/)>
