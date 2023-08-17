/**
 * Module dependencies.
 */
var util = require('util')
	, OAuth2Strategy = require('passport-oauth').OAuth2Strategy;

/**
 * `Strategy` constructor.
 *
 * The NYU authentication strategy authenticates requests by delegating to
 * NYU passport using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your NYU Passport application's client id
 *   - `clientSecret`  your NYU Passport application's client secret
 *   - `callbackURL`   URL to which NYU Passport will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new NYUPassportStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/nyu/callback'
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
	options.authorizationURL = options.authorizationURL || 'http://passport.sg.nyuad.org/visa/oauth/authorize';
	options.tokenURL = options.tokenURL || 'http://passport.sg.nyuad.org/visa/oauth/token';

	OAuth2Strategy.call(this, options, verify);
	this.name = 'nyupassport';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);


/**
 * Retrieve user profile from NYUPassport.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `nyu-passport`
 *   - whatever else your application has been granted (usually netID )
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
	this._oauth2.get('http://passport.sg.nyuad.org/visa/use/info/me', accessToken, function (err, body, res) {
		if (err) { return done(err); }

		try {
			var json = JSON.parse(body);
						
			var profile = json; // is this dangerous?
			profile.provider = 'nyu-passport';

			profile._raw = body;
			profile._json = json;

			done(null, profile);
		} catch(e) {
			done(e);
		}
	});
}


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
