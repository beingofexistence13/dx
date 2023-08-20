[![Build Status][travis-image]][travis-url]
[![Code Coverage][coverage-image]][coverage-url]
[![Code Climate][climate-image]][climate-url]
[![Dependency Status][gemnasium-image]][gemnasium-url]
[![Current Version][npm-image]][npm-url]

# Passport-FellowshipOne

[Passport](http://passportjs.org/) strategy for authenticating with [Fellowship One](http://developer.fellowshipone.org) using the OAuth 1.0a API.

This module lets you authenticate using Fellowship One in your Node.js applications. By plugging into Passport, Fellowship One authentication can be easily and unobtrusively integrated into any application or framework that supports [Connect](http://www.senchalabs.org/connect/)-style middleware, including [Express](http://expressjs.com/).

## Install

    $ npm install passport-fellowshipone

## Usage

#### Configure Strategy

The Fellowship One authentication strategy authenticates users using a Fellowship One account and OAuth 1.0a tokens. The strategy requires a `verify` callback, which accepts these credentials and calls `done` providing a user, as well as `options` specifying a developer key and callback URL.

```js
var FellowshipOneStrategy = require('passport-fellowshipone').Strategy;

passport.use(new FellowshipOneStrategy({
    apiURL: 'https://MyChurch.staging.fellowshiponeapi.com/v1',
    consumerKey: F1_DEVELOPER_KEY,
    consumerSecret: F1_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/fellowshipone/callback"
  },
  function verify(token, tokenSecret, profile, done) {
    User.findOrCreate({ userId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));
```

##### F1-specific options

To make life a little easier for dealing with Fellowship One's API, you can set these options:

- `churchCode` - Your Fellowship One Church Code. When set, this will be used to automatically build the `apiURL` option. _If you want to use the staging environment, you must also set `apiURL`!_
- `apiURL` - The base URL for Fellowship One API operations (i.e. `https://{churchCode}.staging.fellowshiponeapi.com/v1`).
This is auto-calculated from `churchCode` when not specified, but can be provided here for customizations (i.e. pointing to staging).
Supports [URI Templating](http://tools.ietf.org/html/rfc6570), using the `options` object to provide properties.

##### The returned profile

The `verify` callback is given a profile when a user successfully authenticates. The profile is constructed from the user's [F1 Person](http://developer.fellowshipone.com/docs/v1/People.help) record, but only contains a subset of information so that it can be easily linked to a user record in your application.

The profile's properties are:

- `id` - (_Number_) The authenticated user's numeric ID
- `uri` - The full URI for accessing the user's Person record
- `displayName` - A name to be used in user-facing views. If the user has a `goesByName` set in their F1 Person record, this will be used, otherwise this is the `firstName` from F1.
- `fullName` - The user's full name (using `displayName` as the first name)
- `email` - A _guess_ at the user's primary e-mail address. If they _have_ an e-mail address set as `preferred` in the F1 Person record, this will be it. Otherwise, the first e-mail address found for them is used.

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'fellowshipone'` strategy, to authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/) application:

```js
app.get('/auth/fellowshipone',
  passport.authenticate('fellowshipone'));

app.get('/auth/fellowshipone/callback',
  passport.authenticate('fellowshipone', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
```

<!-- Coming soon!
## Examples

For a complete, working example, refer to the [login example](https://github.com/hairyhenderson/passport-fellowshipone/tree/master/examples/login).
-->

## Tests

    $ npm install --dev
    $ make test

## Credits

  - [Jared Hanson](http://github.com/jaredhanson) - for [Passport](http://passportjs.org/) and for [passport-familysearch](https://github.com/jaredhanson/passport-familysearch) upon which this module was based.
  - [Dave Henderson](http://github.com/hairyhenderson) - for converting passport-familysearch to work with the [Fellowship One API](http://developer.fellowshipone.com/)


## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2014-2015 Dave Henderson

[travis-image]: https://img.shields.io/travis/hairyhenderson/passport-fellowshipone.svg?style=flat
[travis-url]: https://travis-ci.org/hairyhenderson/passport-fellowshipone

[coverage-image]: https://img.shields.io/codeclimate/coverage/github/hairyhenderson/passport-fellowshipone.svg?style=flat
[coverage-url]: https://codeclimate.com/github/hairyhenderson/passport-fellowshipone

[climate-image]: https://img.shields.io/codeclimate/github/hairyhenderson/passport-fellowshipone.svg?style=flat
[climate-url]: https://codeclimate.com/github/hairyhenderson/passport-fellowshipone

[gemnasium-image]: https://img.shields.io/gemnasium/hairyhenderson/passport-fellowshipone.svg?style=flat
[gemnasium-url]: https://gemnasium.com/hairyhenderson/passport-fellowshipone

[npm-image]: https://img.shields.io/npm/v/passport-fellowshipone.svg?style=flat
[npm-url]: https://npmjs.org/package/passport-fellowshipone
