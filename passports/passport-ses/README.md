# passport-ses

[summary]::
Password-less authentication strategy using AWS SES.

## Install

```shell
$ npm install passport-ses
```

## Usage

#### Configure Strategy

The SES strategy authenticates users by sending them an email containing
a temporary token.

```js
var SESStrategy = require('passport-ses').Strategy;

passport.use('ses', new SESStrategy({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    source: process.env.FROM_EMAIL,
    hostname: process.env.HOSTNAME || 'localhost:3750'
  }, function(email, done) {
    User.findOne({ email }, function(err, user) {
      done(err, user)
    })
  }
))
```

#### Authenticate Requests
```js
app.get('/auth/ses', passport.authenticate('ses', {
  failureRedirect: '/login',
  successRedirect: '/',
  emailSentRedirect: '/check-email',
}))
```

## Token Store API

The strategy expects a token store that has the following API model:

```js
Token {
  value: String
  email: String
  timestamp: Date
  isValid: function() Boolean {}
  destroy: function() {}
}

TokenStore {
  set: function(value: String, email: String, callback: function(err, Token) {}) {}
  get: function(value: String, callback: function(err, Token) {}) {}
}
```

The default token storage method is an in-memory object,
so restarting the server will delete any saved tokens.
