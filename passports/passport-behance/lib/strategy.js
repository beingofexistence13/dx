/**
 * Module dependencies.
 */
var util = require('util')
  , OAuth2Strategy = require('passport-oauth2')
  , Profile = require('./profile')
  , InternalOAuthError = require('passport-oauth2').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * The Behance authentication strategy authenticates requests by delegating
 * to Behance using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your Behance application's client ID
 *   - `clientSecret`  your Behance application's client secret
 *   - `callbackURL`   URL to which Behance will redirect the user after granting authorization
 *   - `state`         The state parameter is a unique string, chosen by you, used to maintain application state between the request and the callback to your redirect URI. The state you pass in this step will be returned to you in step 2, and you should check its integrity to protect against Cross-Site Request Forgery.
 *
 * Examples:
 *
 *     passport.use(new BehanceStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/behance/callback'
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
  options.authorizationURL = options.authorizationURL || 'https://www.behance.net/v2/oauth/authenticate';
  options.tokenURL = options.tokenURL || 'https://www.behance.net/v2/oauth/token';
  options.scopeSeparator = '|';

  OAuth2Strategy.call(this, options, verify);
  this.name = 'behance';
  this._userProfileURL = options.userProfileURL || 'http://www.behance.net/v2/users/';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);


/**
 * Behance returns user profile with token request.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `behance`
 *   - `id`               the user's Behance ID
 *   - `displayName`      the user's full name
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
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
        

      return done(new InternalOAuthError('Failed to fetch user profile', err));
    }
    
    try {
      json = JSON.parse(body);
    } catch (ex) {
      return done(new Error('Failed to parse user profile'));
    }
    
    var profile = Profile.parse(json);
    profile.provider  = 'behance';
    profile._raw = body;
    profile._json = json;
    
    done(null, profile);
  });
};


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
