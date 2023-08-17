'use strict';
var util = require('util');
var OAuth2Strategy = require('passport-oauth2');
var MeshbluHttp = require('meshblu-http');
var MeshbluConfig = require('meshblu-config');
var _ = require('lodash');

// "accessTokenURL": "https://oauth.octoblu.com/access_token",
// "requestTokenURL": "https://oauth.octoblu.com/request_token",
// "authTokenURL": "https://oauth.octoblu.com/authorize",

function Strategy(options, verify) {
  options = options || {};
  options.authorizationURL = options.authorizationURL || 'https://oauth.octoblu.com/authorize';
  options.tokenURL = options.tokenURL || 'https://oauth.octoblu.com/access_token';
  options.customHeaders = options.customHeaders || {};
  OAuth2Strategy.call(this, options, verify);
  this.name = 'octoblu';
  this.meshbluConfig = options.meshbluConfig || new MeshbluConfig().toJSON();

  this._oauth2.useAuthorizationHeaderforGET(true);
}


util.inherits(Strategy, OAuth2Strategy);


Strategy.prototype.userProfile = function(accessToken, done) {
  var meshbluConfig = _.extend({}, this.meshbluConfig, {auth: {bearer: accessToken}});
  var meshbluHttp = new MeshbluHttp(meshbluConfig);

  meshbluHttp.whoami(function(error, device){
    done(error, device);
  });
};

module.exports = Strategy;
