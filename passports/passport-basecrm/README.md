# Passport-BaseCRM

[![NPM version](https://badge.fury.io/js/passport-basecrm.svg)](http://badge.fury.io/js/passport-basecrm)
[![Build Status](https://secure.travis-ci.org/reydelleon/passport-basecrm.png)](https://travis-ci.org/reydelleon/passport-basecrm)
[![Coverage Status](https://coveralls.io/repos/reydelleon/passport-basecrm/badge.svg)](https://coveralls.io/r/reydelleon/passport-basecrm)
[![Code Climate](https://codeclimate.com/github/reydelleon/passport-basecrm/badges/gpa.svg)](https://codeclimate.com/github/reydelleon/passport-basecrm)
[![Dependency Status](https://david-dm.org/reydelleon/passport-basecrm.svg)](https://david-dm.org/reydelleon/passport-basecrm)
[![Gitter](https://badges.gitter.im/reydelleon/passport-basecrm.svg)](https://gitter.im/reydelleon/passport-basecrm)

[![NPM](https://nodei.co/npm/passport-basecrm.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/passport-basecrm/)

[Passport](http://passportjs.org/) strategy for authenticating with [BaseCRM](https://getbase.com/)
using the OAuth 2.0 API. Visit [Base Developers](https://dev.futuresimple.com/docs/rest/articles/introduction)
to get familiar with their API. You need to register your application with Base to be able to 
access their API.


This module lets you authenticate using BaseCRM in your Node.js applications.
By plugging into Passport, BaseCRM authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-basecrm

## Usage

#### Configure Strategy

In order to identify your application to BaseCRM, specify the `client_id`, `client_secret` and `redirect_uri` 
(callback that you provided when registering the application) within the options. The `client_id` and 
`client_secret` are obtained by registering your application in your BaseCRM account under `Settings -> OAuth -> 
Developer Apps tab`.

    passport.use(new BaseCRMStrategy({
        clientID: BaseCRM_CLIENT_ID,
        clientSecret: BaseCRM_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/basecrm/callback"
        scope: ['read', 'profile', 'write', 'sync']
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ basecrmId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'basecrm'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/basecrm',
      passport.authenticate('basecrm'));

    app.get('/auth/basecrm/callback', 
      passport.authenticate('basecrm', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/reydelleon/passport-basecrm/tree/master/examples/login).

## Tests

    $ npm install --dev
    $ make test

## Credits

  - [Reydel Leon](http://github.com/reydelleon)
  - [Jared Hanson](http://github.com/jaredhanson) For his `passport-oauth2` module.

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2015 Reydel Leon [https://www.linkedin.com/in/reydelleon](https://www.linkedin.com/in/reydelleon)