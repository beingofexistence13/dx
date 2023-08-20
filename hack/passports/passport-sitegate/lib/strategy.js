'use strict';

var util = require('util');
var OAuth2Strategy = require('passport-oauth2');
var InternalOAuthError = require('passport-oauth2').InternalOAuthError;
var Profile = require('./profile');

function Strategy(options, verify) {
  options = options || {};
  options.authorizationURL = options.authorizationURL || options.providerOrigin + '/oauth2/authorize';
  options.tokenURL = options.tokenURL || options.providerOrigin + '/oauth2/token';
  options.scopeSeparator = options.scopeSeparator || ',';
  
  OAuth2Strategy.call(this, options, verify);
  this.name = 'sitegate';
  this._profileURL = options.profileURL || options.providerOrigin + '/api/userinfo';
  
  this._oauth2.useAuthorizationHeaderforGET(true);
}

util.inherits(Strategy, OAuth2Strategy);

Strategy.prototype.userProfile = function (accessToken, done) {
  this._oauth2.get(this._profileURL, accessToken, function (err, body, res) {
    if (err) {
      return done(new InternalOAuthError('failed to fetch user profile', err));
    }
    
    var json;
    
    try {
      json = JSON.parse(body);
    } catch (ex) {
      return done(new Error('Failed to parse user profile'));
    }
    
    var profile = Profile.parse(json);
    profile.provider = 'sitegate';
    profile._raw = body;
    profile._json = json;
    
    done(null, profile);
  });
};

module.exports = Strategy;