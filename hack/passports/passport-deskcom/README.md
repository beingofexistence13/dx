# Passport-Deskcom

!! This package is WIP.

[Passport](http://passportjs.org/) strategy for authenticating with [Desk](http://http://www.desk.com//)
using the OAuth 1.0a API.

## Installation

    $ npm install passport-deskcom


## Usage

#### Configure Strategy

    passport.use(
        new DeskcomStrategy(
            {
                consumerKey: DESKCOM_CONSUMER_KEY,
                consumerSecret: DESKCOM_CONSUMER_SECRET,
                site: "https://spotlight.desk.com",
            callbackURL: "http://127.0.0.1:3000/auth/deskcom/callback"
            },
            function(token, tokenSecret, profile, done) {
                process.nextTick(function () {
                    return done(null, profile);
                });
            }
        )
    );

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'Desk'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/deskcom',
      passport.authenticate('deskcom'));

    app.get('/auth/deskcom/callback',
      passport.authenticate('deskcom', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [signin example](https://github.com/Mistat/passport-deskcom/tree/master/examples/deskcom).

## Tests

    $ npm install --dev
    $ make test

## Credits

  - [Misato Takahashi](http://github.com/Mistat)

## License

(The MIT License)

Copyright (c) 2013 Misato Takahashi

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
