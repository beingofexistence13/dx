# Passport-TiendaNube

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating with [TiendaNube](http://www.tiendanube.com) using the OAuth 2.0 API.

Learn more about TiendaNube OAuth schema [here](https://github.com/tiendanube/api-docs/blob/master/resources/authentication.md).

## Installation

    $ npm install passport-tiendanube

## Configuration

The TiendaNube authentication strategy authenticates users using a TiendaNube
account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a client ID, client secret, and callback URL.

```javascript
var TiendaNubeStrategy = require('passport-tiendanube').Strategy;

passport.use(new TiendaNubeStrategy({
         clientID: 123,
         clientSecret: 'abcdef',
         userAgent: 'MyApp (name@email.com)'
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

Use `passport.authorize()`, specifying the `'tiendanube'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

```javascript
app.get('/auth/tiendanube',
  passport.authorize('tiendanube'));

app.get('/auth/tiendanube/callback', 
  passport.authorize('tiendanube', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.get('/', ensureAuthenticated, 
  function(req, res) {
    res.send("Logged in user: " + req.user.name);
  }
);

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { 
    return next(); 
  };
  res.redirect('/auth/tiendanube');
};
```

The properties available in the `user` object are:
- provider _--> tiendanube_ 
- name
- email
- original_domain
- main_currency
- accessToken

## License

[The MIT License](http://opensource.org/licenses/MIT)
