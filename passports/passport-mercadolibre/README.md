# Passport-Mercadolibre

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating with [MercadoLibre](http://www.mercadolibre.com) using the OAuth 2.0 API.

Learn more about MercadoLibre OAuth schema [here](http://developers.mercadolibre.com/server-side/).

## Installation

    $ npm install passport-mercadolibre

## Configuration

The Mercadolibre authentication strategy authenticates users using a Mercadolibre
account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a client ID, client secret, and callback URL.

You can obtain the client ID and secret by creating a MercadoLibre app [here](http://applications.mercadolibre.com.ar/list).

```javascript
var MercadoLibreStrategy = require('passport-mercadolibre').Strategy;

passport.use(new MercadoLibreStrategy({
    clientID: 'YOUR_CLIENT_ID',
    clientSecret: 'YOUR_CLIENT_SECRET',
    callbackURL: 'http://www.example.com/auth/mercadolibre/callback',
  },
  function (accessToken, refreshToken, profile, done) {
    // + store/retrieve user from database, together with access token and refresh token
    return done(null, profile);
  }
));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
```

## Usage

Use `passport.authorize()`, specifying the `'mercadolibre'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

```javascript
app.get('/auth/mercadolibre',
  passport.authorize('mercadolibre'));

app.get('/auth/mercadolibre/callback',
  passport.authorize('mercadolibre', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.get('/', ensureAuthenticated,
  function(req, res) {
    res.send("Logged in user: " + req.user.nickname);
  }
);

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  };
  res.redirect('/auth/mercadolibre');
};
```

The properties available in the `user` object are:
- provider _--> mercadolibre_
- nickname
- first_name
- last_name
- email
- accessToken

But you can get more information (a lot more!) accessing the raw user profile as provided by MercadoLibre:
- \_raw  _--> raw server response_
- \_json _--> JSON object with server response_

## License

[The MIT License](http://opensource.org/licenses/MIT)

## Thanks

Thanks to https://github.com/mjpearson/passport-wordpress for the README and file structure.
