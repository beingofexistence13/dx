var util = require('util'),
 OAuth2Strategy = require('passport-oauth2'),
 Profile = require('./profile'),
 InternalOAuthError = require('passport-oauth2').InternalOAuthError;

function Strategy(options, verify) {
  options = options || {};
  options.site = options.site || 'example';
  options.authorizationURL = options.authorizationURL || 'https://' + options.site + '.namely.com/api/v05/oauth2/authorize';
  options.tokenURL = options.tokenURL || 'https://' + options.site + '.namely.com/api/v05/oauth2/token';
  options.scopeSeparator = options.scopeSeparator || ',';
  options.customHeaders = options.customHeaders || {};

  if (!options.customHeaders['User-Agent']) {
    options.customHeaders['User-Agent'] = options.userAgent || 'passport-namely';
  }

  OAuth2Strategy.call(this, options, verify);
  this.name = 'namely';
  this._userProfileURL = options.userProfileURL || 'https://' + options.site + '.namely.com/api/v05/profiles/me';
  this._oauth2.useAuthorizationHeaderforGET(true);
}

util.inherits(Strategy, OAuth2Strategy);

/**
 * Retrieve user profile from Namely.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `github`
 *   - `id`               the user's Namely ID
 *   - `firstName`        the user's first name
 *   - `lastName`         the user's last name
 *   - `image`            the image URL for the user
 *   - `emails`           the user's email addresses
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  this._oauth2.get(this._userProfileURL, accessToken, function (err, body, res) {
    var json;

    if (err) {
      return done(new InternalOAuthError('Failed to fetch user profile', err));
    }

    try {
      json = JSON.parse(body);
    } catch (ex) {
      return done(new Error('Failed to parse user profile'));
    }

    var profile = Profile.parse(json);
    profile.provider  = 'namely';
    profile._raw = body;
    profile._json = json;

    return done(null, profile);
  });
};

module.exports = exports = Strategy;
