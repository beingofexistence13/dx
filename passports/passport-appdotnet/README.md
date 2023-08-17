# Passport-AppDotNet

[Passport](https://github.com/jaredhanson/passport) strategy for authenticating
with [App.net](https://alpha.app.net) using the OAuth 2.0 API.

## Installation

    $ npm install passport-appdotnet

## Usage

#### Configure Strategy

The App.net authentication strategy authenticates users using a App.net account and
OAuth tokens.  The strategy requires a `verify` callback, which accepts these
credentials and calls `done` providing a user, as well as `options` specifying a
consumer key, consumer secret, and callback URL.

    passport.use(new AppDotNetStrategy({
        consumerKey: APPDOTNET_CONSUMER_KEY,
        consumerSecret: APPDOTNET_CONSUMER_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/appdotnet/callback"
      },
      function(token, tokenSecret, profile, done) {
        User.findOrCreate({ appdotnetId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'appdotnet'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/appdotnet',
      passport.authenticate('appdotnet'),
      function(req, res){
        // The request will be redirected to App.net for authentication, so this
        // function will not be called.
      });

    app.get('/auth/appdotnet/callback',
      passport.authenticate('appdotnet', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Credits
  - [Michael Owens](https://github.com/mowens)
  - [Jen Fong-Adwent](https://github.com/ednapiranha)

## Thanks
  - [Jared Hanson](https://github.com/jaredhanson)
  - [Dalton Caldwell](https://github.com/daltonc)
  - [The App.net Team](https://github.com/appdotnet)

## License

(The MIT License)

Copyright (c) 2012 Michael Owens

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.