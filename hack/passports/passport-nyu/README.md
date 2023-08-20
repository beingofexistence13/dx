# Passport-NYUADSG

Node.js [Passport](https://github.com/jaredhanson/passport) strategy for authenticating with [NYUADSG](http://passport.sg.nyuad.org) using the OAuth 2.0 API.

## Installation

    $ npm install passport-nyu

## Usage

#### Configure Strategy

The NYUPassport authentication strategy authenticates users using their NYUADSG account
account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a client ID, client secret, and callback URL.

    passport.use(new NYUPassportStrategy({
        clientID: NYU_CLIENT_ID,
        clientSecret: NYU_CLIENT_SERVER,
        callbackURL: "http://127.0.0.1:3000/auth/nyu/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ netID: profile.netID }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'nyu-passport'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/nyu',
      passport.authenticate('nyu-passport'),
      function(req, res){
        // The request will be redirected to AngelList for authentication, so
        // this function will not be called.
      });

    app.get('/auth/angellist/callback', 
      passport.authenticate('nyu-passport', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Credits

  - [Jared Hanson](http://github.com/jaredhanson): developer of [Passport](https://github.com/jaredhanson/passport)
  - [Morgante Pell](http://morgante.net): initial developer

## License

(The MIT License)

Copyright (c) 2012 Morgante Pell

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
