passport-feedly
===============

> Passport strategy for authenticating with Fedly using the OAuth 2.0 API.

This module lets you authenticate using Feedly in your Node.js applications. By plugging into Passport, Facebook authentication can be easily and unobtrusively integrated into any application or framework that supports Connect-style middleware, including Express.


Install
===============

    $ npm install passport-feedly



Usage
===============

The Feedly authentication strategy authenticates users using a Facebook account and OAuth 2.0 tokens. The strategy requires a verify callback, which accepts these credentials and calls done providing a user, as well as options specifying an app ID, app secret, callback URL.


    passport.use(new FacebookStrategy({
        clientID: APP_ID,
        clientSecret: APP_SECRET,
        callbackURL: "http://localhost:8080/auth/feedly/callback",
        enableProof: false
        },
        function(accessToken, refreshToken, profile, done) {
            User.findOrCreate({ id: profile.id }, function (err, user) {
                return done(err, user);
            });
        }
    ));

> Authenticate Requests
***
> Use passport.authenticate(), specifying the 'feedly' strategy, to authenticate requests.

For example, as route middleware in an Express application:

    app.get('/auth/feedly',
        passport.authenticate('feedly'));

    app.get('/auth/feedly/callback',
        passport.authenticate('feedly', { failureRedirect: '/login' }),
        function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });


> Extended Permissions

If you need extended permissions from the user, the permissions can be requested via the scope option to

    passport.authenticate()

> For example, this authorization requests permission to get user subscriptions

    app.get('/auth/feedly',
        passport.authenticate('feedly', { scope : 'https://cloud.feedly.com/subscriptions' }));


Version
----

0.1.2

License
----

MIT

Author
----

Meir Shamay @meir_shamay

**Free Software, Hell Yeah!**

[@meir_shamay]:https://www.twitter.com/meir_shamay