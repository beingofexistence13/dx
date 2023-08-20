/**
 * Module dependencies.
 */
var util = require('util')
  , OAuthStrategy = require('passport-oauth').OAuthStrategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * The Stash authentication strategy authenticates requests by delegating to
 * Stash using the OAuth protocol.
 *
 * Applications must supply a `verify` callback which accepts a `token`,
 * `tokenSecret` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `consumerKey`     identifies client to Stash
 *   - `consumerSecret`  secret used to establish ownership of the consumer key
 *   - `apiURL`          api url for Stash instance
 *   - `callbackURL`     URL to which Stash will redirect the user after obtaining authorization
 *
 * Examples:
 *
 *     passport.use(new StashStrategy({
 *         consumerKey: '123-456-789',
 *         consumerSecret: 'shhh-its-a-secret',
 *         apiURL: 'http://api.example.com',
 *         callbackURL: 'https://www.example.net/auth/stash/callback'
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
    options.sessionKey = options.sessionKey || 'oauth:stash';
    options.signatureMethod = options.signatureMethod || "RSA-SHA1";

    if (options.apiURL != undefined) {
        options.requestTokenURL = options.apiURL + "/plugins/servlet/oauth/request-token";
        options.accessTokenURL = options.apiURL + "/plugins/servlet/oauth/access-token";
        options.userAuthorizationURL = options.apiURL + "/plugins/servlet/oauth/authorize";
    }

    OAuthStrategy.call(this, options, verify);
    this.name = 'stash';
}

/**
 * Inherit from `OAuthStrategy`.
 */
util.inherits(Strategy, OAuthStrategy);


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
