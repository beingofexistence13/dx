/**
 * Module dependencies.
 */
var util = require('util')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;

var profileURL = 'https://api.zenginehq.com/v1/users/me';

/**
 * `Strategy` constructor.
 *
 * The Zengine authentication strategy authenticates requests by delegating to
 * Zengine using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your Zengine application's Client ID
 *   - `clientSecret`  your Zengine application's Client Secret
 *   - `callbackURL`   URL to which Zengine will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new ZengineStrategy({
 *         clientID: 'my-app',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: '/auth/zengine/callback'
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
  options.authorizationURL = options.authorizationURL || 'https://auth.zenginehq.com/oauth2/v1/authorize';
  options.tokenURL = options.tokenURL || 'https://auth.zenginehq.com/oauth2/v1/grant';

  if (options.profileURL) {
    profileURL = options.profileURL;
  }

  OAuth2Strategy.call(this, options, verify);
  this.name = 'zengine';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);


/**
 * Retrieve user profile from Zengine.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `zengine`
 *   - `id`
 *   - `username`
 *   - `displayName`
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  this._oauth2.get(profileURL, accessToken, function (err, body, res) {
    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }

    try {
      var json = JSON.parse(body);

      var profile = { provider: 'zengine' };

      profile.id = json.data.id;
      profile.displayName = json.data.displayName;
      profile.emails = [{ value: json.data.email }];
      profile.settings = {
        timezone: json.data.settings.timezone,
        dateFormat: json.data.settings.dateFormat
      };

      profile._raw = body.data;

      done(null, profile);
    } catch(e) {
      done(e);
    }
  });
}

Strategy.prototype.authorizationParams = function(options) {

  var params = {};

  // Zengine requires state parameter. It will return an error if not set.
  if (options.state) {
    params['state'] = options.state;
  }
  return params;

}

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
