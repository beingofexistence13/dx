# passport-thinkful
[![Circle CI](https://circleci.com/gh/Thinkful/passport-thinkful.svg?style=shield)](https://circleci.com/gh/Thinkful/passport-thinkful)

Thinkful's authentication strategy for [Passport](http://passportjs.org/).

This module authenticates requests intended for Thinkful services. It wraps [http-passport-bearer](//github.com/jaredhanson/passport-http-bearer) with a JWT verification step.

## Install

    $ npm install passport-thinkful

## Usage

#### Configure Strategy

```javascript
passport.use(new ThinkfulStrategy(
  { secret: publicPrivateSigningKey },
  function (req, user, done) {
    request.get(USER_API_ENDPOINT)
      .set('Authorization', req.headers.authorization)
      .end(function (err, res) {
        if (err) { return done(err); }
        if (!res.body || !res.body.user) { return done(null, false); }
        return done(null, res.body.user);
      });
  }
));
```

#### Authenticate Requests

Use `passport.authenticate('thinkful')` to authenticate requests. JWT authorization tokens negate the need for sessions, so the `session` option should be set to `false`.

An [Express](http://expressjs.com/) route middleware example:

```javascript
app.get('/users/me',
  passport.authenticate('thinkful', { session: false }),
  function(req, res) { res.json(req.user); }
);
