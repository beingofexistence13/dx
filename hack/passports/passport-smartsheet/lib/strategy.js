/**
 * Module dependencies.
 */
var util = require('util'),
  crypto = require('crypto'),
  Oauth2Strategy = require('passport-oauth2');

function Strategy(options, verify) {
  options = options || {};
  options.tokenURL = options.tokenURL || 'https://api.smartsheet.com/1.1/token';
  options.authorizationURL = 'https://www.smartsheet.com/b/authorize';

  this.clientSecret = options.clientSecret;

  Oauth2Strategy.call(this, options, verify);

  this.name = 'smartsheet';
}

util.inherits(Strategy, Oauth2Strategy);

Strategy.prototype.authenticate = function(req, options) {
  var shasum = crypto.createHash('sha256');

  var code;

  if(req.query && req.query.code){
    code = req.query.code;
  }

  shasum.update(this.clientSecret + '|' + code);

  options.hash = shasum.digest('hex');

  Oauth2Strategy.prototype.authenticate.call(this, req, options);
};

Strategy.prototype.tokenParams = function(options){
  return {
    hash : options.hash
  };
};

module.exports = Strategy;