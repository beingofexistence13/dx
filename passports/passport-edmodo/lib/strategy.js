
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
 * The Edmodo Connect authentication strategy authenticates requests by delegating to
 * Edmodo using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your Edmodo application's Client ID
 *   - `clientSecret`  your Edmodo application's Client Secret
 *   - `callbackURL`   URL to which Edmodo will redirect the user after granting authorization
 *   - `scope`         array of permission scopes to request.  valid scopes include:
 *                     'all', 'basic', 'read_user_email'
 *                     (see https://developers.edmodo.com/edmodo-connect/docs/#connecting-your-application for more info)
 *
 * Examples:
 *
 *     passport.use(new EdmodoStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/login/edmodo/callback'
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
	options.authorizationURL = options.authorizationURL || 'https://api.edmodo.com/oauth/authorize';
	options.tokenURL = options.tokenURL || 'https://api.edmodo.com/oauth/token';
	options.customHeaders = options.customHeaders || {};

	OAuth2Strategy.call(this, options, verify);
	this.name = 'edmodo';
	this._userProfileURL = options.userProfileURL || 'https://api.edmodo.com/users/me';
	this._oauth2.useAuthorizationHeaderforGET(true);
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);


/**
 * Authenticate request by delegating to a service provider using OAuth 2.0. Pass useTokenFlow: true in the options
 * object to use a token instead of redirect flow.
 *
 * @param {Object} req
 * @pararm {Object} options
 * @api protected
 */
Strategy.prototype.authenticate = function(req, options) {
	if (!options.useTokenFlow) {
		// normal code flow is handled by default OAuth2 strategy
		return OAuth2Strategy.prototype.authenticate.call(this, req, options);
	}

	options = options || {};
	var self = this;

	if (req.query && req.query.error) {
		// TODO: Error information pertaining to OAuth 2.0 flows is encoded in the
		//       query parameters, and should be propagated to the application.
		return this.fail();
	}

	// req.body may not be present, but token may be present in querystring
	var accessToken, refreshToken;
	if(req.body){
		accessToken = req.body.access_token;
		refreshToken = req.body.refresh_token;
	}

	accessToken = accessToken || req.query.access_token;
	refreshToken = refreshToken || req.query.refresh_token;

	if (!accessToken) {
		return this.fail();
	}

	self.userProfile(accessToken, function(err, profile) {
		if (err) { return self.fail(err); };

		function verified(err, user, info) {
			if (err) { return self.error(err); }
			if (!user) { return self.fail(info); }
			self.success(user, info);
		}

		self._verify(accessToken, refreshToken, profile, verified);
	});
}

/**
 * Retrieve user profile from Edmodo.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `edmodo`
 *   - `id`               the user's Edmodo ID
 *   - `username`         the user's Edmodo username
 *   - `displayName`      the user's full name
 *   - `name`             an object containing the user's given and family names
 *   - `role`             the user's type on Edmodo (student, teacher, etc)
 *   - `photos`           the user's Edmodo avatars, if available
 *   - `emails`           the user's email addresses, if available
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
	var self = this;

	var requestProfile = function(url, redirectCount, cb) {
		self._oauth2.get(url, accessToken, function (err, body, res) {
			if (err) return cb(err);

			if (res && (res.statusCode === 301 || res.statusCode === 302)) {
				if (res.headers && res.headers.location && redirectCount < 10) {
					return requestProfile(res.headers.location, redirectCount++, cb);
				} else {
					return cb(new Error('Invalid or too many redirects fetching user profile'));
				}
			}

			return cb(null, body, res);
		});
	};

	return requestProfile(self._userProfileURL, 0, function(err, body, res) {
		if (err) {
			return done(new InternalOAuthError('Failed to fetch user profile', err));
		}

		try {
			json = JSON.parse(body);
		} catch (ex) {
			return done(new Error('Failed to parse user profile'));
		}

		var profile = Profile.parse(json);
		profile.provider  = 'edmodo';
		profile._raw = body;
		profile._json = json;

		done(null, profile);
	});
}


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
