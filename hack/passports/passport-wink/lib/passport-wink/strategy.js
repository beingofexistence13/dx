/**
 * Module dependencies.
 */
var util = require('util')
  , OAuth2Strategy = require('passport-oauth2')
  , InternalOAuthError = require('passport-oauth2').InternalOAuthError
  , APIError = require('./errors/apierror');


/**
 * `Strategy` constructor.
 *
 * The wink authentication strategy authenticates requests by delegating to
 * wink using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your wink application's client id
 *   - `clientSecret`  your wink application's client secret
 *   - `callbackURL`   URL to which wink will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new WinkStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/wink/callback'
 *       },
 *       function(accessToken, refreshToken, profile, done) {
 *         self.oauth = results.data;
 *		   callback(null); 
 *		 });
 *     ));
 *
 *
 *  Note: for token re-authorization, set options.grant_type = "refresh_token"
 *
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options, verify) {
  options = options || {};
  options.clientID = options.clientID || {};
  options.clientSecret = options.clientSecret || {};
  options.grant_type = "password";
  options.skipUserProfile = true;
  options.authorizationURL = options.authorizationURL || 'https://winkapi.quirky.com/oauth2/token';
  options.tokenURL = options.tokenURL || 'https://winkapi.quirky.com/oauth2/token';
  OAuth2Strategy.call(this, options, verify);
  this.name = 'wink';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);


/**
 * Parse error response from wink OAuth 2.0 token endpoint.
 *
 * @param {String} body
 * @param {Number} status
 * @return {Error}
 * @api protected
 */
Strategy.prototype.parseErrorResponse = function(body, status) {
  var json = JSON.parse(body);
  if (json.error && typeof json.error == 'string' && !json.error_description) {
    return new APIError(json.error);
  }
  return OAuth2Strategy.prototype.parseErrorResponse.call(this, body, status);
};


/**
 * Authorization Response (in place of userProfile).  Returned as JSON
 *
 * (201 Created)
 * Content-Type: application/json
 * {
 *     "data": {
 *         "access_token": "example_access_token_like_135fhn80w35hynainrsg0q824hyn",
 *         "refresh_token": "crazy_token_like_240qhn16hwrnga05euynaoeiyhw52_goes_here",
 *         "token_type": "bearer"
 *     }
 * }
 * 
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  this._oauth2.get(this._userProfileURL, accessToken, function (err, body, res) {
    var json;
    
    if (err) {
      if (err.data) {
        try {
          json = JSON.parse(err.data);
        } catch (_) {}
      }
      
      if (json && json.error && typeof json.error == 'string') {
        return done(new APIError(json.error));
      }
      return done(new InternalOAuthError('Failed to fetch user profile', err));
    }

    try {
      json = JSON.parse(body);
    } catch (ex) {
      return done(new Error('Failed to parse user profile'));
    }
    
    var profile = parse(json);
    profile.provider  = 'wink';
    profile._raw = body;
    profile._json = json;
    
    done(null, profile);
  });
};


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
