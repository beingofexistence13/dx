/**
 * Module dependencies.
 */
var util = require('util');
var OAuth2Strategy = require('passport-oauth').OAuth2Strategy;
var InternalOAuthError = require('passport-oauth').InternalOAuthError;

/**
 * Creates an instance of `LimsStrategy`.
 *
 *
 * Options:
 *
 *   - `authorizationURL`  URL used to obtain an authorization grant
 *   - `tokenURL`          URL used to obtain an access token
 *   - `clientID`          identifies client to service provider
 *   - `clientSecret`      secret used to establish ownership of the client identifer
 *   - `callbackURL`       URL to which the service provider will redirect the user after obtaining authorization
 *   - `passReqToCallback` when `true`, `req` is the first argument to the verify callback (default: `false`)
 *
 * Examples:
 *
 *     passport.use(new LimsStrategy({
 *         authorizationURL: 'https://www.example.com/oauth2/authorize',
 *         tokenURL: 'https://www.example.com/oauth2/token',
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/example/callback'
 *       },
 *       function(accessToken, refreshToken, profile, done) {
 *         User.findOrCreate(..., function (err, user) {
 *           done(err, user);
 *         });
 *       }
 *     ));
 *
 * @constructor
 * @param {Object|Function} [options]
 * @param {Function} verify
 * @api public
 */
function LimsStrategy(options, verify) {
  if (!options.userProfileURL) {
    throw new TypeError('LimsStrategy requires a userProfileURL option');
  }

  OAuth2Strategy.call(this, options, verify);
  this.name = 'lims';

  this._userProfileURL = options.userProfileURL;
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(LimsStrategy, OAuth2Strategy);


/**
 * Retrieve user profile from service provider.
 *
 * OAuth 2.0-based authentication strategies can override this function in
 * order to load the user's profile from the service provider.  This assists
 * applications (and users of those applications) in the initial registration
 * process by automatically submitting required information.
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
LimsStrategy.prototype.userProfile = function (accessToken, done) {
  this._oauth2.get(this._userProfileURL, accessToken, function (err, body, res) {
    if (err) {
      console.error(err);
      return done(new InternalOAuthError('failed to fetch user profile', err));
    }

    try {
      var json = JSON.parse(body)
        , i, len;

      var info = (json.ok && json.user) || json;

      var profile = {provider: 'lims'};
      profile.id = info.id;
      profile.displayName = info.displayName;

      if (info.username) {
        profile.username = info.username;
      }

      if (info.name) {
        profile.name = {
          familyName: info.name.familyName,
          givenName: info.name.givenName
        };
      }

      if (info.email) {
        profile.email = info.email;
      }

      var emails = info.emails || (info.email ? [{value: info.email}] : null);
      if (emails) {
        profile.emails = [];
        for (i = 0, len = emails.length; i < len; ++i) {
          profile.emails.push({value: emails[i].value, type: emails[i].type})
        }
      }

      if (info.image) {
        profile.photos = [{value: info.image.url}];
      }
      profile.gender = info.gender;

      profile._raw = body;
      profile._info = info;

      done(null, profile);
    } catch (e) {
      done(e);
    }
  });
};

/**
 * Return extra parameters to be included in the authorization request.
 *
 * Some OAuth 2.0 providers allow additional, non-standard parameters to be
 * included when requesting authorization.  Since these parameters are not
 * standardized by the OAuth 2.0 specification, OAuth 2.0-based authentication
 * strategies can override this function in order to populate these parameters
 * as required by the provider.
 *
 * @param {Object} options
 * @return {Object}
 * @api protected
 */
LimsStrategy.prototype.authorizationParams = function (options) {
  return {};
};

/**
 * Return extra parameters to be included in the token request.
 *
 * Some OAuth 2.0 providers allow additional, non-standard parameters to be
 * included when requesting an access token.  Since these parameters are not
 * standardized by the OAuth 2.0 specification, OAuth 2.0-based authentication
 * strategies can override this function in order to populate these parameters
 * as required by the provider.
 *
 * @return {Object}
 * @api protected
 */
LimsStrategy.prototype.tokenParams = function (options) {
  return {};
};

/**
 * Expose `LimsStrategy`.
 */
module.exports = LimsStrategy;
