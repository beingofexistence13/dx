# Passport-AuthTkt

[Passport](http://passportjs.org/) strategy for authenticating with a
[mod_auth_tkt](http://www.openfusion.com.au/labs/mod_auth_tkt/) ticket cookie.

## Install

    $ npm install passport-authtkt

## Usage

#### Configure Strategy

The AuthTkt authentication strategy authenticates requests based on the
presence and validity of an auth_tkt cookie. To use it, you should configure
the `cookieParser` middleware as well as Passport:

    app.configure(function() {
        ...
        app.use(express.cookieParser());
        app.use(passport.initialize());
        ...
    });

To use the strategy:

    authtkt = require('passport-authtkt');

    ...

    passport.use(new authtkt.Strategy('mysecret', {
        timeout: 60*60, // 1 hour timeout; omit to not have a timeout
        encodeUserData: true,
        jsonUserData: true
    }));

The first argument is the authentication secret that is used to sign cookies.
This should be a secret string, and should ideally be *different* from any
session secret passed to the Express `session` middleware.

Valid options include:

* `key` - name of the cookie.
* `encodeUserData - encode and decode the userData string using base64.
   Defaults to true.
* `jsonUserData` - encode and decode the userData string as JSON.
   Defaults to false.
* `ip` - use the given IP address (a dotted quad string) to create/validate
  tickets.
* `timeout` - time, in seconds, for ticket validation.

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'authtkt'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.post('/foo', 
        passport.authenticate('authtkt', { failureRedirect: '/login' }),
        function(req, res) {
            ...
        }
    );

Note that the authenticator does not need to store anything in the session.
If you do not configure any session middleware, you should pass
`session: false` in the options to the authentication hook:

    app.post('/foo', 
        passport.authenticate('authtkt', { session: false, failureRedirect: '/login' }),
        function(req, res) {
            ...
        }
    );

When the authenticator is used, `req.authInfo` will be the parsed ticket,
assuming authentication was successful. This is an object with the keys:

* `userid`, the user id encoded in the authentication cookie
* `userData`, the user data encoded in the cookie. If the strategy is set up
  with `jsonUserData`, this may be an object containing user information;
  otherwise it will be a string.
* `tokens`, a list of authentication tokens, if set in the authentication cookie
* `timestamp`, the timestamp (as seconds from the epoch) of the cookie

`req.user` will be the same as `req.authInfo.userData`.

The `AuthTkt` instance configured with the secret and options is available
as `strategy.authtkt`. This can be used e.g. to call `createTicket()` during
login - see below.

When `req.authInfo` is set on requests where the authenticator is used, the
authentication cookie will be set if either there is a timeout configured, or
the user id, user data or tokens for the ticket in `req.authInfo` has changed.
This also applies if authentication was unsuccessful, i.e. if `req.authInfo`
is set later by other middleware or routes.

#### Saving the ticket cookie

To create a cookie, use the helper functions `createTicket()` and
`encodeCookieValue()` on an `AuthTkt` instance. For example, a login route
may do the following, using the `getStrategy()` helper function to obtain the
currently configured strategy instance:

    var authtkt = require('passport-authtkt');

    var strategy = authtkt.getStrategy(req);
    var ticket = strategy.authtkt.createTicket(user.id, {userData: user});
    return res.cookie(strategy.key, strategy.authtkt.base64Encode(ticket));

In this example, `user` is an object or string representing a user that has
been validated (e.g. looked up in a database and authenticated). If `user`
an object, `jsonUserData: true` should be set in the strategy options (see
above). `user.id` is the user's id.

The example may be shortned further using the `getCookieValue()` helper:

    var strategy = req._passport.instance._strategy('authtkt');
    res.cookie(strategy.key, strategy.authtkt.getCookieValue(user.id, {userData: user}));

To log the user out, simply clear the cookie:

    res.clearCookie(strategy.key);

See `authtkt.js` for more details about the methods available on the `authtkt`
object, which is an instance of the `AuthTkt` prototype found in that file.
This is in fact a generic utiltiy for creating and parsing `auth_tkt` tickets,
and so may be useful in other contexts.

#### Parsing cookies client or server side

Sometimes, it may be useful to parse an `auth_tkt` cookie on the client. The
cookie format allows user id, tokens and the user data string to be extracted
without knowing the authentication secret (which should be known to the server
only).

To aid this, `passport-authtkt` ships with a module called `authtktutils.js`
that defines an object with functions `splitTicket()`, `base64Encode()` and
`base64Decode()`. This may be loaded as either a Node module, a RequireJS
module, or a JavaScript source file (which will define a global `authtktUtils`
with the above functions).

A typical usage pattern may be:

    var cookieValue = $.cookie('auth_tkt'); // Using the jQuery.cookie plugin
    var ticket = authtktUtils.base64Decode(cookieValue);
    var ticketData = authtktUtils.splitCookie(cookieValue, {jsonUserData: true});
    var userData = ticketData.userData;

See `authtktutils.js` for more details.

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/optilude/passport-authtkt.png)](http://travis-ci.org/optilude/passport-authtkt)

## Credits

  - [Martin Aspeli](http://github.com/optilude)
  - Based heavily on [passport-local](https://github.com/jaredhanson/passport-local)
    by Jared Hanson
  - Laurence Rowe provided the Python implementation of the `mod_auth_tkt`
    algorithm used as the basis for the JavaScript port in `authtkt.js`.

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Martin Aspeli
