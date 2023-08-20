/**
 * Module dependencies.
 */
var uri = require('url'),
  crypto = require('crypto'),
  util = require('util'),
  OAuth2Strategy = require('passport-oauth2'),
  InternalOAuthError = require('passport-oauth2').InternalOAuthError,
  Profile = require('./profile')

/**
 * `Strategy` constructor.
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options, verify) {
  options = options || {};
  options.site = options.site || process.env.DEADBOLT_URL;
  options.authorizationURL = options.authorizationURL || (options.site + '/oauth/authorize');
  options.tokenURL = options.tokenURL || (options.site + '/oauth/token');

  OAuth2Strategy.call(this, options, verify);
  this.name = 'rescour';
  this._clientSecret = options.clientSecret;
  this._profileURL = options.profileURL || (options.site + '/me.json');
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);


/**
 * Retrieve user profile from Deadbolt.
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  var url = uri.parse(this._profileURL);
  url = uri.format(url);

  this._oauth2.get(url, accessToken, function (err, body, res) {
    var json;

    if (err) {
      if (err.data) {
        try {
          json = JSON.parse(err.data);
        } catch (_) {}
      }

      return done(new InternalOAuthError('Failed to fetch user profile', err));
    }

    try {
      json = JSON.parse(body);
    } catch (ex) {
      return done(new Error('Failed to parse user profile'));
    }

    var profile = Profile.parse(json);
    profile.provider = 'rescour';
    profile._raw = body;
    profile._json = json;

    done(null, profile);
  });
};

/**
 * Parse error response from Facebook OAuth 2.0 token endpoint.
 *
 * @param {String} body
 * @param {Number} status
 * @return {Error}
 * @api protected
 */
Strategy.prototype.parseErrorResponse = function(body, status) {
  var json = JSON.parse(body);
  return OAuth2Strategy.prototype.parseErrorResponse.call(this, body, status);
};

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
