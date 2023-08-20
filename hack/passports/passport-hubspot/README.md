# Passport-Hubspot

# This repo is being depcrecated in favor of [passport-hubspot-oauth2](https://www.npmjs.com/package/passport-hubspot-oauth2) which is being actively maintained and is current with HubSpot's OAuth 2.0 implementation.

[Passport](http://passportjs.org/) strategy for authenticating with [HubSpot](http://www.hubspot.com/)
using the OAuth 2.0 API.

This module lets you authenticate using HubSpot in your Node.js applications. By plugging into Passport, HubSpot authentication can be easily and unobtrusively integrated into any application or framework that supports [Connect](http://www.senchalabs.org/connect/)-style middleware, including [Express](http://expressjs.com/).

## Usage

#### Configure Strategy

The HubSpot authentication strategy authenticates users using a HubSpot account and OAuth 2.0 tokens.

**NOTE:** Unlike normal OAuth 2.0 flows, HubSpot immediately returns an access token instead of an authorization code. Therefore, unlike other passport strategies, this strategy does not actually call the `verify` callback.

    passport.use(new HubSpotStrategy({
        clientID: HUBSPOT_APP_ID,
        clientSecret: HUBSPOT_APP_SECRET,
        callbackURL: "http://localhost:3000/auth/hubspot/callback"
      }, function() {
        // Useless verify callback.
      };
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'hubspot'` strategy, to authenticate requests. You'll also need to provide a `portalId` and any scopes you'll need access to.

For example, as route middleware in an [Express](http://expressjs.com/) application:

    app.get('/auth/hubspot', passport.authenticate('hubspot', {
        portalId: 62515,
        scope: ['offline', 'contacts-ro', 'contacts-rw']
      })
    );

    app.get('/auth/hubspot/callback', function(req, res) {
        // Access tokens are returned immediately as params, which you can then store somehow.
        console.log(req.params);

        // Redirect to home.
        res.redirect('/');
    });

## Credits

Based on the great work of [Brian Falk (@brainflake)](http://github.com/brainflake) and [Jonathan K (@hijonathan)](https://github.com/hijonathan)

Code based on passport-facebook by [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)
