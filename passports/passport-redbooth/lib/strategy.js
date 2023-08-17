/**
 * Module dependencies.
 */
var util = require('util'),
  Oauth2Strategy = require('passport-oauth2');

function Strategy(options, verify) {
  options = options || {};
  options.authorizationURL = 'https://redbooth.com/oauth2/authorize';
  options.tokenURL = 'https://redbooth.com/oauth2/token';

  Oauth2Strategy.call(this, options, verify);

  this.name = 'redbooth';
}

util.inherits(Strategy, Oauth2Strategy);

module.exports = Strategy;