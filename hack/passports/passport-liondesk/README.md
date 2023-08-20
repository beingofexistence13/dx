# passport-liondesk

[Passport](http://passportjs.org/) strategy for authenticating with [LionDesk](http://www.liondesk.com/)
using the OAuth 2.0 API.

This module lets you authenticate using LionDesk in your Node.js applications.
By plugging into Passport, LionDesk authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-liondesk

## Usage

#### Create an Application

Before using `passport-liondesk`, you must register an application with
LionDesk.  If you have not already done so, a new application can be created at
[LionDesk Developer Center](https://developers.liondesk.com/).  Your application will
be issued an client ID and client secret, which need to be provided to the strategy.
You will also need to configure a redirect URI which matches the route in your
application.

#### Configure Strategy

The LionDesk authentication strategy authenticates users using a LionDesk
account and OAuth 2.0 tokens.  The client ID and secret obtained when creating an
application are supplied as options when creating the strategy.  The strategy
also requires a `function`, which receives the `access token` and optional
`refresh token`, as well as `profile` which contains the authenticated user's
LionDesk profile and a `done` callback which must be called `cb` providing a user to
complete authentication.

```js
var LionDeskStrategy = require('passport-liondesk').Strategy;

passport.use(new LionDeskStrategy({
    clientID: LIONDESK_CLIENT_ID,
    clientSecret: LIONDESK_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/liondesk/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ liondeskId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));
```

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2018 Christian Torres <[http://christiantorres.me/](http://christiantorres.me/)>
