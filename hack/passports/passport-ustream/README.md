passport-ustream [![Circle CI](https://circleci.com/gh/superpan/passport-ustream.png?style=badge)](https://circleci.com/gh/superpan/passport-ustream)
================

passport oath2.0 plugin for ustream

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating with [Ustream](https://ustream.tv) using the OAuth 2.0 API.

## Install
```
npm install passport-ustream
```

## Usage

####Configure Strategy

```
var UstreamStrategy = require('passport-ustream').Strategy;

passport.use(new UstreamStrategy({
    clientID: 'ABC123',
    callbackURL: "http://127.0.0.1:3000/auth/ustream/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // find that user
    ...
  }
));
```
