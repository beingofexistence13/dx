/**
 * Module dependencies.
 */
const util = require('util');
const OAuth2Strategy = require('passport-oauth2');

/**
 * `Strategy` constructor.
 *
 * The FACEIT authentication strategy authenticates requests by delegating to
 * FACEIT using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your FACEIT application's client id
 *   - `clientSecret`  your FACEIT application's client secret
 *
 * Examples:
 *
 *     passport.use(new faceitStrategy({
 *         clientID: "123-456-789",
 *         clientSecret: "shhh-its-a-secret"
 *       },
 *       function(accessToken, refreshToken, params, profile, done) {
 *          const userData = jwt.decode(params.id_token);
 *
 *          done(null, {
 *            faceitId: userData.guid,
 *            faceitAvatar: userData.picture,
 *            faceitEmail: userData.email,
 *            faceitNickname: userData.nickname
 *          });
 *       }
 *     ));
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options, verify) {
  delete options.scope;
  delete options.callbackURL;

  options = options || {};
  options.authorizationURL = options.authorizationURL || 'https://cdn.faceit.com/widgets/sso/index.html';
  options.tokenURL = options.tokenURL || 'https://api.faceit.com/auth/v1/oauth/token';

  OAuth2Strategy.call(this, options, verify);
  this.name = 'faceit';

  this._oauth2.setAuthMethod('OAuth');
  this._oauth2.useAuthorizationHeaderforGET(true);
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);

/**
 * Return extra parameters to be included in the authorization request.
 *
 * @param {Object} options
 * @return {Object}
 * @api protected
 */
Strategy.prototype.authorizationParams = function authorizationParams() {
  return { redirect_popup: true };
};

module.exports = Strategy;
