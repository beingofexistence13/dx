/**
 * Module dependencies.
 */
var util = require('util');
var OAuth2Strategy = require('passport-oauth2');
var Profile = require('./profile');
var InternalOAuthError = require('passport-oauth2').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * This code is based off passport-github by jaredhanson
 *
 *
 * The Cloudup authentication strategy authenticates requests by delegating to
 * Cloudup using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your Cloudup application's App ID
 *   - `clientSecret`  your Cloudup application's App Secret
 *   - `callbackURL`   URL to which Cloudup will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new CloudupStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: '/auth/cloudup/callback'
 *       },
 *       function(accessToken, refreshToken, profile, done) {
 *         User.findOrCreate(..., function (err, user) {
 *           done(err, user);
 *         });
 *       }
 *     ));
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options, verify) {
  options = options || {};
  options.authorizationURL = options.authorizationURL || 'https://cloudup.com/oauth/authorize';
  options.tokenURL = options.tokenURL || 'https://cloudup.com/oauth/access_token';
  options.scopeSeparator = options.scopeSeparator || ',';
  options.customHeaders = options.customHeaders || {};
  if (!options.customHeaders['User-Agent']) {
    options.customHeaders['User-Agent'] = options.userAgent || 'passport-cloudup';
  }


  OAuth2Strategy.call(this, options, verify);
  this.name = 'cloudup';
  this._userProfileURL = options.userProfileURL || 'https://api.cloudup.com/user';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);


Strategy.prototype.userProfile = function(accessToken, done) {
  this._oauth2.get(this._userProfileURL, accessToken, function (err, body, res) {
    var json;

    if (err) {
      return done(new InternalOAuthError('Failed to fetch user profile', err));
    }

    try {
      json = JSON.parse(body);
    } catch (ex) {
      return done(new Error('Failed to parse user profile ' + ex));
    }

    var profile = Profile.parse(json);
    profile.provider  = 'cloudup';
    profile._raw = body;
    profile._json = json;
    done(null, profile);
  });
};


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
