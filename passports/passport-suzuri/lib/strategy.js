/**
 * Module dependencies.
 */
var util = require('util');
var OAuth2Strategy = require('passport-oauth2');
var InternalOAuthError = require('passport-oauth2').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * The SUZURI authentication strategy authenticates requests by delegating to
 * SUZURI using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your SUZURI application's client id
 *   - `clientSecret`  your SUZURI application's client secret
 *   - `callbackURL`   URL to which SUZURI will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new SuzuriStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.com/callback'
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
  options.authorizationURL = options.authorizationURL || 'https://suzuri.jp/oauth/authorize';
  options.tokenURL = options.tokenURL || 'https://suzuri.jp/oauth/token';

  OAuth2Strategy.call(this, options, verify);
  this.name = 'SUZURI';
  this._userProfileURL = options.userProfileURL || 'https://suzuri.jp/api/v1/user';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);


/**
 * Retrieve user profile from SUZURI.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `SUZURI`
 *   - `id`
 *   - `username`
 *   - `displayName`
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  this._oauth2.get(this._userProfileURL, accessToken, function (err, body, res) {
    var json;

    if (err) {
      return done(new InternalOAuthError('failed to fetch user profile', err));
    }

    try {
      json = JSON.parse(body);
    } catch (e) {
      return done(new Error('Failed to parse user profile'));
    }

    var profile = {};
    profile.id = json.user.id;
    profile.displayName = json.user.displayName;
    profile.name = json.user.name;
    profile.provider = 'SUZURI';
    profile._raw = body;
    profile._json = json;

    done(null, profile);
  });
};

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
