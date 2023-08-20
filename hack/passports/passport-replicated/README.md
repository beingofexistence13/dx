# passport-replicated

[![Build](https://travis-ci.org/ekristen/passport-replicaetd.png)](https://travis-ci.org/ekristen/passport-replicated)
[![Dependencies](https://david-dm.org/ekristen/passport-replicated.png)](https://david-dm.org/ekristen/passport-replicated)

[Passport](http://passportjs.org/) strategy for authenticating with the [Replicated](http://www.replicated.com) [Identity API](http://docs.replicated.com/v1.0/docs/identity-api)

## Install

```bash
$ npm install passport-replicated

```

## Usage

### Configure Strategy

The replicated authentication strategy authenticates users using a username and
password.  The strategy requires a `verify` callback, which accepts these
credentials and calls `done` providing a user.

Since you are authenticating off another source, generally you just want to find or create a local record, and move forward.

```js
passport.use(new ReplicatedStrategy({
    usernameField: 'email',
    passwordField: 'password',
  },
  function(profile, done) {
    User.findOrCreate({ ... }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));
```

### Available Options

This strategy takes an optional options hash before the function, e.g. `new ReplicatedStrategy({/* options */, callback})`.

The available options are:

* `usernameField` - Optional, defaults to 'username'
* `passwordField` - Optional, defaults to 'password'
* `url` - Optional, defaults to the value of `process.env.REPLICATED_INTEGRATIONAPI`
* `path` - Optional, defaults to `/identity/v1/login`

Both fields define the name of the properties in the POST body that are sent to the server.

### Parameters

By default, `ReplicatedStrategy` expects to find credentials in parameters
named username and password. If your site prefers to name these fields
differently, options are available to change the defaults.

    passport.use(new ReplicatedStrategy({
        usernameField: 'email',
        passwordField: 'passwd',
        session: false
      },
      function(profile, done) {
        // ...
      }
    ));

When session support is not necessary, it can be safely disabled by
setting the `session` option to false.

The verify callback can be supplied with the `request` object by setting
the `passReqToCallback` option to true, and changing callback arguments
accordingly.

    passport.use(new ReplicatedStrategy({
        usernameField: 'email',
        passwordField: 'passwd',
        passReqToCallback: true,
        session: false
      },
      function(req, profile, done) {
        // request object is now first argument
        // ...
      }
    ));

### Authenticate Requests

Use `passport.authenticate()`, specifying the `'replicated'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

```js
app.post('/login', 
  passport.authenticate('replicated', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });
```

## Tests

```bash
$ npm install
$ npm test
```

## Credits

Thanks to [Jared Hanson](http://github.com/jaredhanson) for the `passport-local` example and the stellar readme to borrow from.


This project was made possible by [NowSecure](https://www.nowsecure.com)
