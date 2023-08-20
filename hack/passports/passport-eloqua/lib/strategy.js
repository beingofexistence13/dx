var util = require('util')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;

/**
 * `Strategy` constructor.
 *
 * The Eloqua authentication strategy authenticates requests by delegating to
 * Eloqua using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your Eloqua application's client id
 *   - `clientSecret`  your Eloqua application's client secret
 *   - `callbackURL`   URL to which Eloqua will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new EloquStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/bilty/callback'
 *       },
 *       function(token, tokenSecret, profile, done) {
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
  if (!options.clientID) { throw new TypeError('OAuth2Strategy requires a clientID option'); }
  if (!options.clientSecret) { throw new TypeError('OAuth2Strategy requires a clientSecret option'); }

  // Eloqua has a quirk where Basic Auth is required on the authorization request
  // http://topliners.eloqua.com/docs/DOC-5796
  basicAuth = 'Basic ' + new Buffer(options.clientID+':'+options.clientSecret).toString('base64')
  options.customHeaders = { 'Authorization': basicAuth }

  options.authorizationURL = options.authorizationURL || 'https://login.eloqua.com/auth/oauth2/authorize'
  options.tokenURL = options.tokenURL || 'https://login.eloqua.com/auth/oauth2/token'

  OAuth2Strategy.call(this, options, verify);
  this.name = 'eloqua';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
