# Passport-HackID

[Passport](http://passportjs.org/) strategy for authenticating with [HackID](https://hackid.herokuapp.com/)
using the OAuth 2.0 API.

This module lets you authenticate using HackID in your Node.js applications.
By plugging into Passport, HackID authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Installation

    $ npm install passport-hackid

## Usage

#### Configure Strategy

The HackID authentication strategy authenticates users using a HackID
account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a app ID, app secret, and callback URL.

    passport.use(new HackIDStrategy({
        clientID: HACKID_APP_ID,
        clientSecret: HACKID_APP_SECRET,
        callbackURL: "http://localhost:3000/auth/hackid/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ hackidId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'hackid'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/hackid',
      passport.authenticate('hackid'),
      function(req, res){
        // The request will be redirected to HackID for authentication, so
        // this function will not be called.
      });

    app.get('/auth/hackid/callback',
      passport.authenticate('hackid', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

#### Extended Permissions

If you need extended permissions from the user, the permissions can be requested
via the `scope` option to `passport.authenticate()`.

For example, this authorization requests permission to the user's statuses and
checkins:

    app.get('/auth/hackid',
      passport.authenticate('hackid', { scope: ['user_status', 'user_checkins'] }),
      function(req, res){
        // The request will be redirected to HackID for authentication, with
        // extended permissions.
      });

#### Display Mode

The display mode with which to render the authorization dialog can be set by
specifying the `display` option.  Refer to Facebook's [OAuth Dialog](https://developers.facebook.com/docs/reference/dialogs/oauth/)
documentation for more information.

    app.get('/auth/hackid',
      passport.authenticate('hackid', { display: 'touch' }),
      function(req, res){
        // ...
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/HackBerkeley/passport-hackid/tree/master/examples/login).

## Credits

  - [Steve Yadlowsky](http://github.com/grizlo42)
  - [Jared Hanson](http://github.com/jaredhanson) creator of the passport-facebook, from which this was mirrored.

## License

(The MIT License)

Copyright (c) 2011 Steve Yadlowsky

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
