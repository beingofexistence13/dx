/**
 * Module dependencies.
 */
var util = require('util');
var OAuth2Strategy = require('passport-oauth2');
//var OAuth2Strategy = require('passport-oauth');
var InternalOAuthError = require('passport-oauth2').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * The Moves authentication strategy authenticates requests by delegating to
 * Moves using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your Moves application's Client ID
 *   - `clientSecret`  your Moves application's Client secret
 *   - `callbackURL`   URL to which Moves will redirect the user after granting authorization
 *                     Note: this callbackURL must match one of the redirect URIs registered with your application.
 * 
 * Note:
 *   - You can obtain a clientID and clientSecret here: https://dev.moves-app.com/apps/new
 *
 * Examples:
 *
 *     passport.use(new MovesStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/moves/callback'
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
	options.authorizationURL = options.authorizationURL || 'https://api.moves-app.com/oauth/v1/authorize';
	options.tokenURL = options.tokenURL || 'https://api.moves-app.com/oauth/v1/access_token';

	OAuth2Strategy.call(this, options, verify);
	this.name = 'moves';
	this._userProfileURL = options._userProfileURL || 'https://api.moves-app.com/api/1.1/user/profile';
	this._skipExtendedUserProfile = (options.skipExtendedUserProfile !== undefined) ? options.skipExtendedUserProfile : false;
}

/**
 * Inherit from `OAuthStrategy`.
 */
util.inherits(Strategy, OAuth2Strategy);

/**
 * Retrieve user profile from Moves.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `id`        (equivalent to `userId`)
 *
 * @param {String} token
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
	if (!this._skipExtendedUserProfile) {
		var json;

		this._oauth2.get(this._userProfileURL, accessToken, function (err, body, res) {
			
			// handle errors
			if (err) {
        if (err.data) {
          try {
            json = JSON.parse(err.data);
          } catch (_) {}
        }
        
        if (json && json.errors && json.errors.length) {
          var e = json.errors[0];
          return done(new APIError(e.message, e.code));
        }
        return done(new InternalOAuthError('Failed to fetch user profile', err));
      }

      // parse the user profile
      try {
        json = JSON.parse(body);
      } catch (ex) {
        return done(new Error('Failed to parse user profile'));
      }

      // construct standard profile
			var profile = {};
			profile.provider = 'moves';
			profile.id = json.userId;
			profile._raw = body;
			profile._json = json;
			done(null, profile);

		});
	}
}

module.exports = Strategy;
