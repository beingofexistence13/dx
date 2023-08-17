'use strict';

var util           = require('util');
var OAuth2Strategy = require('passport-oauth2');
// var querystring    = require('querystring');


// "tokenUrl": "https://api.flic.io/api/v1/oauth2",
// "authTokenURL": "https://api.flic.io/users/oauth2/authorize"

function Strategy(options, verify) {
  options = options || {};
  options.authorizationURL = options.authorizationURL || 'https://api.flic.io/users/oauth2/authorize';
  options.tokenURL = options.tokenURL || 'https://api.flic.io/api/v1/oauth2';


  OAuth2Strategy.call(this, options, verify);
  this.name = 'flic';
  this._oauth2.useAuthorizationHeaderforGET(true);
}


util.inherits(Strategy, OAuth2Strategy);


Strategy.prototype.userProfile = function(accessToken, done) {
  setTimeout(function(){
    done(null, {provider: 'flic'});
  }, 0);
};

module.exports = Strategy;
