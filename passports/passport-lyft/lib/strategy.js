/**
 * Module dependencies
 */
var util = require('util');
var OAuth2Strategy = require('passport-oauth2');
var InternalOAuthError = require('passport-oauth2').InternalOAuthError;


/**
 * `Strategy` constructor
 *
 * The Lyft authentication strategy authenticates requests by delegating to
 * Lyft using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`     your Lyft application's client id
 *   - `clientSecret` your Lyft application's client secret
 *   - `callbackURL`  URL to which Lyft will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new lyftStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret',
 *         callbackURL: 'https://www.example.net/auth/lyft/callback'
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
  options.authorizationURL = options.authorizationURL || 'https://api.lyft.com/oauth/authorize';
  options.tokenURL = options.tokenURL || 'https://api.lyft.com/oauth/token';
  options.scopeSeparator = options.scopeSeparator || ' ';
  options.customHeaders = {
    Authorization: 'Basic ' + new Buffer(options.clientID + ':' + options.clientSecret).toString('base64')
  };

  OAuth2Strategy.call(this, options, verify);
  this.name = 'lyft';
  this._userProfileURL = options.userProfileURL || 'https://api.lyft.com/v1/profile';
  this._oauth2.setAuthMethod('Bearer');
  this._oauth2.useAuthorizationHeaderforGET(true);
}


/**
 * Inherit from `OAuth2Strategy`
 */
util.inherits(Strategy, OAuth2Strategy);


/**
 * Retrieve user profile from lyft
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `lyft`
 *   - `id`               currently (v1), user id is the only available user profile
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */

Strategy.prototype.userProfile = function(accessToken, done) {
  var headers = {'Authorization': 'Bearer ' + accessToken };

  this._oauth2._request('GET', this._userProfileURL, headers, '', accessToken, function (err, body, res) {
    var json;
    
    if (err) {
      console.log(err);
      if (err.data) {
        try {
          json = JSON.parse(err.data);
        } catch (_) {}
      }
      
      if (json && json.meta && json.meta.errorType) {
        return done(new APIError(json.meta.errorDetail, json.meta.errorType, json.meta.code));
      }
      return done(new InternalOAuthError('Failed to fetch user profile', err));
    }

    try {
      json = JSON.parse(body);
    } catch (ex) {
      return done(new Error('Failed to parse user profile'));
    }

    if ('string' == typeof json) {
      json = JSON.parse(json);
    }

    var profile = {};
    profile.id = String(json.id);

    profile.provider = 'lyft';
    profile._raw = body;
    profile._json = json;
    
    done(null, profile);
  });
}


/**
 * Expose `Strategy`
 */

module.exports = Strategy;
