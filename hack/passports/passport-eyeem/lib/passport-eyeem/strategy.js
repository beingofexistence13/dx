/**
 * Module dependencies.
 */
var util = require('util')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * The Instagram authentication strategy authenticates requests by delegating to
 * Instagram using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your Instagram application's client id
 *   - `clientSecret`  your Instagram application's client secret
 *   - `callbackURL`   URL to which Instagram will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new InstagramStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/instagram/callback'
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
  options.authorizationURL = options.authorizationURL || 'https://www.eyeem.com/oauth/authorize';
  options.tokenURL = options.tokenURL || 'https://api.eyeem.com/v2/oauth/token';

  OAuth2Strategy.call(this, options, verify);
  this.name = 'eyeem';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);


/**
 * Retrieve user profile from Eyeem.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `eyeem`
 *   - `id`               the user's Eyeem ID
 *   - `username`         the user's Eyeem username
 *   - `displayName`      the user's full name
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {

    this._oauth2.get('https://api.eyeem.com/v2/users/me', accessToken, function (err, body, res) {
        if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }

        try {
            var json = JSON.parse(body);

            var profile = { provider: 'eyeem' };
            profile.id = json.user.id;
            profile.displayName = json.user.fullname;
            profile.name = json.user.fullname;
            { familyName: json.name }; // have no better idea, only the "real name" is provided
            profile.username = json.user.nickname;

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
