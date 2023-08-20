/**
 * Module dependencies.
 */
var util = require('util')
  , OAuth2Strategy = require('passport-oauth2')
  , InternalOAuthError = require('passport-oauth2').InternalOAuthError;

/**
 * `Strategy` constructor.
 *
 * The ShareFile authentication strategy authenticates requests by delegating to
 * ShareFile using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your ShareFile application's Client ID
 *   - `clientSecret`  your ShareFile application's Client Secret
 *   - `callbackURL`   URL to which ShareFile will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new ShareFileStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/sharefile/callback'
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
  options.authorizationURL = options.authorizationURL || 'https://secure.sharefile.com/oauth/authorize';
  options.tokenURL = options.tokenURL || 'https://secure.sharefile.com/oauth/token';
  options.customHeaders = options.customHeaders || {};

  OAuth2Strategy.call(this, options, verify);
  this.name = 'sharefile';
  this._oauth2.useAuthorizationHeaderforGET(true);
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);

/**
 * Retrieve user profile from GitHub.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `sharefile`
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  setTimeout(function(){
    done(null, {provider: 'sharefile'});
  }, 0);
}

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
