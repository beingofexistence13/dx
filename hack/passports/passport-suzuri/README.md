passport-suzuri - OAuth2.0 npm package for SUZURI OAuth
================

[![NPM](https://nodei.co/npm/passport-suzuri.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/passport-suzuri/)

## Introduction

[Passport](http://passportjs.org/) strategy for authenticating with [SUZURI Developer Center](https://suzuri.jp/developer/documentation/v1) using the OAuth 2.0 API

This module can be used with passport in Node.js.
You can integrate into below applications or frameworks.
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-suzuri

## Usage

### Configuration Strategy

This SUZURI passport module requires your application' id.
You can get this id from [SUZURI Developer Center](https://suzuri.jp/developer/)

### Authorization Endpoint

```javascript
var passport = require('passport');
var SuzuriStrategy = require('passport-suzuri').SuzuriStrategy;

passport.use(new SuzuriStrategy({
  clientID     : <SUZURI_CLIENT_ID>,
  clientSecret : <SUZURI_CLIENT_SECRET>,
  callbackURL  : <CALL_BACK_URL>,
}, function(accessToken, refreshtoken, profile, done){
  // With this accessToken you can access user profile data.
  // In the case that accessToken is expired, you should
  // regain it with refreshToken. So you have to keep these token
  // safely. done will get user profile data such as openid in YConnect
});
```
### Token Endpoint

With this module, you don't have to do anything to get accessToken.
As you see above, you have already obtain accessToken and refreshToken.
So this process is not required with this module.

### License

[MIT](http://kitak.mit-license.org/)
