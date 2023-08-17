# Passport-Beatsmusic

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [Beats Music Developers](https://developer.beatsmusic.com/) using the OAuth 2.0 API.

This module lets you authenticate using Beats Music in your Node.js applications.  By
plugging into Passport, Beats Music authentication can be easily and unobtrusively
integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-beatsmusic

## Usage

#### Configure Strategy

The Beats Music authentication strategy authenticates users using a Beats Music
account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a client ID, client secret, and callback URL.

The client ID and secret are obtained by registering an application at the
[Beats Music Developers](https://developer.beatsmusic.com/member/register).

    passport.use(new BeatsMusicStrategy({
        clientID: 'BEATS MUCIS KEY',
        clientSecret: 'BEATS MUSIC SUPER SECRET',
        callbackURL: "https://www.example.net/auth/beatsmusic/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate(..., function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'beatsmusic'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/beatsmusic',
      passport.authenticate('beatsmusic'));

    app.get('/auth/beatsmusic/callback',
      passport.authenticate('beatsmusic', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Credits

  - [Mark Purugganan](http://github.com/datmark)

## Thanks

  - [Jared Hanson](http://github.com/jaredhanson)

## License

(The MIT License)

Copyright (c) 2014 Mark Purugganan, DatMarkLabs

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
