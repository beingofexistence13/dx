# passport-authentiq

[Passport](http://passportjs.org/) strategy for authenticating with [Authentiq](https://www.authentiq.com/developers?utm_source=github&utm_medium=readme&utm_campaign=passport-authentiq) via [OpenID Connect](http://openid.net/connect/), an identity layer built on top of OAuth 2.0. 

This module lets you authenticate without passwords using Authentiq ID in your Node.js applications. By plugging into Passport, Authentiq  authentication can be easily and unobtrusively integrated into any application or framework that supports [Connect](http://www.senchalabs.org/connect/)-style middleware, including [Express](http://expressjs.com/).

## Install

```bash
npm install passport passport-authentiq
```

## Usage

#### Create an Application

Before using `passport-authentiq`, you must register an application with Authentiq. If you have not already done so, a new application can be created at the [Authentiq Dashboard](https://dashboard.authentiq.com/).

Your application will be issued a Client ID and Client Secret, that need to be provided to the strategy. You will also need to configure a callback URL which matches the route in your application.

#### Configure Strategy

To configure the strategy the `clientID` and `clientSecret` obtained previously need to be supplied as parameters.

The `callbackURL` is the URL to which Authentiq will redirect the user after granting authorization.

The `scope` parameter specifies what identity claims to request from the user. Valid scopes include `aq:name`, `email`, `phone`, `address`, and `aq:location`. The `openid` scope is added automatically. Appending `~rs` to the `email` or `phone` scope to [ensure](https://developers.authentiq.com/#identity-claims) those claims are always _verified_.

```javascript
var AuthentiqStrategy = require('passport-authentiq').Strategy;

passport.use(new AuthentiqStrategy({
    clientID: 'Authentiq Client ID',
    clientSecret: 'Authentiq Client Secret',
    callbackURL: 'https://website.example/auth/authentiq/callback',
    scope: ['aq:name', 'email~rs', 'phone']
},
function (iss, sub, profile, done) {
    // Persist or update user locally.
    return done(err, user);
}));
```

The strategy will call the provided `verify` callback identity information received form the authorization server.

In the above example, the callback accepts `iss`, `sub` and the profile of the user, but there are several other callback signatures available:

```javascript
    function (iss, sub, profile, jwtClaims, accessToken, refreshToken, params, done)

    function (iss, sub, profile, accessToken, refreshToken, params, done)

    function (iss, sub, profile, accessToken, refreshToken, done)

    function(iss, sub, profile, done)

    function(iss, sub, done)
```

The callback must call `done` to complete the authentication.

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `authentiq` strategy, to authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/) application:


```javascript
app.get('/auth/authentiq', passport.authenticate('authentiq'));

app.get('/auth/authentiq/callback',
    passport.authenticate('authentiq', {
        successRedirect: '/signed-in',
        failureRedirect: '/error'
    })
);
```

See [here](http://expressjs.com/en/starter/hello-world.html) for a boilerplate Express application. You will need the following dependencies

    npm install express express-session


## Contributing

#### Tests

The test suite is located in the `test/` directory.  All new features are expected to have corresponding test cases.  Ensure that the complete test suite passes by executing:

```bash
make test
```

#### Coverage


```bash
make test-cov
make view-cov
```

## License

[The MIT License](http://opensource.org/licenses/MIT)

© 2017 [Authentiq](https://www.authentiq.com/)
