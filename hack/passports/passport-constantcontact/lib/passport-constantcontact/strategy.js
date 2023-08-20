var OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError
  , util = require('util');

/**
 * `Strategy` constructor.
 *
 * Constant Contact uses the OAuth 2.0 protocol for authentication.
 *
 * Applications using this must supply a callback to verify the credentials which
 * accepts an `accessToken`, `refreshToken`, and a `profile`. After verifying the
 * credentials it should call `done` with the user object and any error that may
 * have occured as the first parameter.
 *
 * Options:
 *   - `clientID`	your Constant Contact application's App ID
 *   - `clientSecret`	your Constant Contact application's App Secret
 *   - `callbackURL`	URL to which Constant Contact will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new ConstantContactStrategy({
 *         clientID: 'CONSTANTCONTACT_APP_ID',
 *         clientSecret: 'SECRET_SAUCE',
 *         callbackURL: 'https://www.example.net/auth/constantcontact/callback'
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
  options.authorizationURL = options.authorizationURL || 'https://oauth2.constantcontact.com/oauth2/oauth/siteowner/authorize';
  options.tokenURL = options.tokenURL || 'https://oauth2.constantcontact.com/oauth2/oauth/token';

  OAuth2Strategy.call(this, options, verify);
  this.name = 'constantcontact';
  // this._oauth2._useAuthorizationHeaderForGET = true;
}

util.inherits(Strategy, OAuth2Strategy);

/**
 * Retrieve user profile from Constant Contact.
 *
 * This function constructs a profile from the Constant Contact metadata call:
 *
 *   - `provider`	set to `constantcontact`
 *   - `username`	the user's Constant Contact ID
 *   - `
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  var url = 'https://oauth2.constantcontact.com/oauth2/tokeninfo.htm';

  var post_headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  var post_body = 'access_token=' + accessToken;

  this._oauth2._request("POST", url, post_headers, post_body, null, function(err, body, res) {

    if (err) {
      return done(new InternalOAuthError('Failed to fetch user metadata', err));
    }

    try {
      var json = JSON.parse(body);

      var profile = { provider: 'constantcontact' };
      profile.accessToken = accessToken;

      profile._raw = body;
      profile._json = json;

      done(null, profile);
    } catch (e) {
      done(e);
    }
  });
}

module.exports = Strategy;
