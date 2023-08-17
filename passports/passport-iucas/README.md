# passport-iucas

Indiana University CAS authentication strategies for Passport.

## Install

    $ npm install passport-iucas

#### Configure Strategy

    var iucas_strategy = new iucas.Strategy(function(username, done) {
        //TODO - lookup user from specified username
        return done(null, {id: username, email: 'user@email.com'});
    });
    passport.use(iucas_strategy);

#### Authenticate Requests

    //access this to login via IU CAS
    app.use('/protected', passport.authenticate('iucas', { failureRedirect: '/iucas/fail' }), function(req, res, next) {
        //user object can be accessed via req.user
        //render your protected content
    });

Instead of authenticating everytime you access /protected, you can do something like

    function ensureAuth(req, res, next) {
        if(req.isAuthenticated()) {
            return next();
        } else {
            res.redirect('/login');
        }
    }
    app.use('/protected', ensureAuth, function(req, res) {
        res.json({user: req.user});
    });

And make /login to the actual authentication. This requires you to use session so that your user object will be persisted. Please see 
/test/app.js for more details.

## License

[The MIT License](http://opensource.org/licenses/MIT)
