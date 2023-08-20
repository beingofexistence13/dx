# passport-xmpp

[![Build](https://travis-ci.org/surevine/passport-xmpp.png)](https://travis-ci.org/surevine/passport-xmpp)
[![Coverage](https://coveralls.io/repos/surevine/passport-xmpp/badge.png)](https://coveralls.io/r/surevine/passport-xmpp)
[![Quality](https://codeclimate.com/github/surevine/passport-xmpp.png)](https://codeclimate.com/github/surevine/passport-xmpp)
[![Dependencies](https://david-dm.org/surevine/passport-xmpp.png)](https://david-dm.org/surevine/passport-xmpp)

[Passport](http://passportjs.org/) strategy for authenticating with an XMPP account.

This module lets you authenticate using an XMPP account in your Node.js
applications.  By plugging into Passport, XMPP authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

__Note:__ This strategy isn't recommended for use unless:
* Users are able and willing to trust your service
* Users are using a SASL authentication mechanism that does not involve them revealing their true password

We don't currently support setting a SASL mechanism but pieces are in place, if required please raise an issue and we'll finish off the code. Thanks!

## Install

    $ npm install passport-xmpp

## Usage

#### Configure Strategy

This authentication strategy authenticates users using an XMPP account. The strategy requires a `verify` callback, which accepts these
credentials and calls `done` providing a user.

    passport.use(new XmppStrategy());

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'xmpp'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.post('/login', 
      passport.authenticate('xmpp', { failureRedirect: '/login' }),
      function(req, res) {
        res.redirect('/');
      });

## Tests

    $ npm install
    $ npm test

## Credits

  - [Lloyd Watkin](http://github.com/lloydwatkin)
  - [Surevine](http://www.surevine.com)

This module has been highly influenced by [passport-local](https://github.com/jaredhanson/passport-local) by [Jared Hanson](https://github.com/jaredhanson).

## License

[The MIT License](http://opensource.org/licenses/MIT)
