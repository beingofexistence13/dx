/**
 * Module dependencies.
 */
var util = require('util'),
	OAuth2Strategy = require('passport-oauth').OAuth2Strategy,
	InternalOAuthError = require('passport-oauth').InternalOAuthError;

/**
 * `Strategy` constructor.
 * 
 * @param {Object} options 
 * @param {Function} verify
 * @api public
 */
function Strategy(options, verify) {
	options = options || {};
	profileUrl = options.profileURL || null;
	providerUrl = options.providerURL || null;
	options.authorizationURL = providerUrl + 'dialog/authorize';
	options.tokenURL = providerUrl + 'oauth/token';
	options.scopeSeparator = options.scopeSeparator || ',';

	OAuth2Strategy.call(this, options, verify);
	this.name = 'signature';
	this._profileUrl = profileUrl;
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);

/**
 * Return extra Signature-specific parameters to be included in the authorization
 * request.
 *
 * Options:
 *  - `display`  Display mode to render dialog, { `page`, `popup`, `touch` }.
 *
 * @param {Object} options
 * @return {Object}
 * @api protected
 */
Strategy.prototype.authorizationParams = function (options) {
	var params = {},
		display = options.display;
	if (display) {
		params['display'] = display;
	}
	return params;
};

/**
 * Retrieve user profile from Signature.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `signature`
 *   - `id`               the user's Signature ID
 *   - `displayName`      the user's full name
 *   - `name.first_name`  the user's last name
 *   - `name.last_name`   the user's first name
 *   - `name.middle_name`  the user's middle name
 *   - `name.maiden_name`  the user's middle name
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function (accessToken, done) {
	var profileUrl = this._profileUrl || 'https://auth.signature.com/api/userinfo';
	this._oauth2.getProtectedResource(profileUrl, accessToken, function (err, body, res) {
		if (err) {
			return done(new InternalOAuthError('failed to fetch user profile', err));
		}
		try {
			var json = JSON.parse(body);
			var profile = {
				provider: 'signature'
			};
			
			profile.id = json.user_id;
			profile.first_name = json.first_name || null;
			profile.middle_name = json.middle_name || null;
			profile.last_name = json.last_name || null;
			profile.maiden_name = json.maiden_name || null;
			profile.displayName = [profile.first_name, profile.last_name].join(' ');
			profile._raw = body;
			profile._json = json;
			return done(null, profile);
		} catch (e) {
			return done(e);
		}
	});
}

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;