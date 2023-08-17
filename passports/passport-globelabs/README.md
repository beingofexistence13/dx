# passport-globelabs

[Passport](http://passportjs.org/) strategy for authenticating with [Globe Labs](http://www.globelabs.com.ph/) using the OAuth 2.0 API.

[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url] [![MIT License][license-image]][license-url]

## Install

Install the module via npm:

    npm install passport-globelabs

## Usage

#### Configure Strategy

The Globe Labs authentication strategy authenticates subscriber using a Globe Labs mobile number
and OAuth2 tokens.  The strategy requires a `verify` callback, which receives the
access token and subscriber number which
contains the authenticated subscriber's information. The `verify` callback must
call `done` providing a user to complete authentication.

    passport.use(new GlobeLabsStrategy({
        appId: APP_ID,
        appSecret: APP_SECRET
      },
      function(accessToken, subscriberNumber, done) {
        User.findOrCreate({ mobile_no : subscriberNumber }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'globelabs'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/globelabs',
      passport.authenticate('globelabs'));

    app.get('/auth/globelabs/callback', 
      passport.authenticate('globelabs', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Tests
  $ npm install
  $ npm test

## Credits

- [Ian Mark Muninio](http://github.com/ianmuninio)

## Thanks

- [Jared Hanson](http://github.com/jaredhanson)

## License

The MIT License (MIT)

Copyright (c) 2015 Globe Labs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/passport-globelabs
[npm-version-image]: http://img.shields.io/npm/v/passport-globelabs.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/passport-globelabs.svg?style=flat
