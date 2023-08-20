# Passport-Freshbooks

[Passport](http://passportjs.org/) strategy for authenticating with [Freshbooks](http://www.freshbooks.com/)
using the OAuth 1.0a API.

This module lets you authenticate using Freshbooks in your Node.js applications.
By plugging into Passport, Freshbooks authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

This module is based on Jared Hanson's excellent [Passport LinkedIn](https://github.com/jaredhanson/passport-linkedin) module.

LinkedIn and Freshbooks both use oAuth1.0a so it seemed like a good place to start.

## Install

    $ npm install passport-freshbooks

## Usage

#### Configure Strategy

For a working example, see ./examples/login/app.js.

The Freshbooks authentication strategy authenticates users using a Freshbooks
account and OAuth tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a consumer key, consumer secret, and callback URL.

    passport.use(new FreshbooksStrategy({

        // This is your Freshbooks subdomain.  e.g. `example` in `http://example.freshbooks.com`
        subdomain: SUBDOMAIN,
        consumerKey: SUBDOMAIN,

        // This is your OAuth Secret from My Account -> Freshbooks API.
        consumerSecret: FRESHBOOKS_OAUTH_SECRET,

        // This callback needs to be the same servername as the app.  localhost != 127.0.0.1
        callbackURL: "http://127.0.0.1:3000/auth/freshbooks/callback"
      },
      function(token, tokenSecret, profile, done) {
        User.findOrCreate({ freshbooksId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'freshbooks'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/freshbooks',
      passport.authenticate('freshbooks'));
    
    app.get('/auth/freshbooks/callback', 
      passport.authenticate('freshbooks', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

#### Profile Fields

The Freshbooks profile contains a lot of information.

See ./examples/login/views/account.ejs and ./examples/login/app.js for more info

## Examples

For a complete, working example, refer to the [login example](https://github.com/MichaelJCole/passport-freshbooks/tree/master/examples/login).


## Credits

  - [Jared Hanson](http://github.com/jaredhanson) - for [Passport](http://passportjs.org/) and for [passport-linkedin](https://github.com/jaredhanson/passport-linkedin) upon which this module was based.
  - [Michael Cole](https://github.com/MichaelJCole) - for converting passport-linkedin to work with the [Freshbooks API](http://developers.freshbooks.com/)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Michael Cole <[http://powma.com/](http://powma.com/)>
