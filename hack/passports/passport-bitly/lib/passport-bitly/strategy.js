var util = require('util')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;

/**
 * `Strategy` constructor.
 *
 * The BITLY authentication strategy authenticates requests by delegating to
 * BITLY using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientId`      	your Bitly application's client id
 *   - `clientSecret`  	your Bitly application's client secret
 *   - `callbackURL`   	URL to which Bitly will redirect the user after granting authorization (optional of set in your Bitly Application
 *   - `grant_type`		Must be authorization_code
 *
 * Examples:
 *
 *     passport.use(new BitlyStrategy({
 *         client_id: '123-456-789',
 *         client_secret: 'shhh-its-a-secret'
 *         redirect_uri: 'https://www.example.net/auth/bilty/callback'
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
  // http://dev.bitly.com/authentication.html
  options.authorizationURL = options.authorizationURL || 'https://bitly.com/oauth/authorize';
  options.tokenURL = options.tokenURL || 'https://api-ssl.bitly.com/oauth/access_token';
  options.grant_type = options.grant_type || 'authorization_code';

  OAuth2Strategy.call(this, options, verify);
  this.name = 'bitly';
  this._oauth2.useAuthorizationHeaderforGET(true);
  this._profileURL = options.profileURL || 'https://api-ssl.bitly.com/v4/user';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);

/**
 * Retrieve user profile from bitly.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `bitly`
 *   - `id`
 *   - `fullName`
 *   - `displayName`
 *   - `profileUrl`
 *   - `profileImage`
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  var url = this._profileURL;

  this._oauth2.get(url, accessToken, function (err, body, res) {
    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }

    try {
      var json = JSON.parse(body);

      var profile = { provider: 'bitly' };
      profile.id = json.login;
      profile.fullName = json.name;
      profile.displayName = json.name;

      profile._raw = body;
      profile._json = json;

      done(null, profile);
    } catch(e) {
      done(e);
    }
  });
}

/**
 * Return extra Bitly-specific parameters to be included in the authorization
 * request.
 *
 * Options:
 *
 * @param {Object} options
 * @return {Object}
 * @api protected
 */
Strategy.prototype.authorizationParams = function (options) {
  var params = {};

  return params;
};

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;