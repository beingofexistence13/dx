# Passport-Draugiem

[Passport](http://passportjs.org/) strategy for authenticating with [Draugiem](http://www.draugiem.lv/)

## Install
```bash
npm install passport-draugiem
```

## Usage

#### Configure Strategy
```js
passport.use(new DraugiemStrategy({
    appId: DRAUGIEM_APP_ID,
    appKey: DRAUGIEM_APP_KEY,
    callbackURL: "http://localhost:3000/auth/draugiem/callback"
  },
  function(apiKey, profile, done) {
    User.findOrCreate({ draugiem: profile.uid }, function (err, user) {
      return done(err, user);
    });
  }
));
```

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'draugiem'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:
```js
app.get('/auth/draugiem',
  passport.authenticate('draugiem'));

app.get('/auth/draugiem/callback',
  passport.authenticate('draugiem', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
```

## Notes
For Node.js 18+ you can skip installing node-fetch with
```bash
npm i passport-twitter-2 --omit=optional
```
and use built-in fetch instead.

## Credits

  - [Ēriks Remess](http://github.com/EriksRemess)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2022 Ēriks Remess
