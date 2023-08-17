/**
 * Module dependencies.
 */
var util = require('util')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;

/**
 * `Strategy` constructor.
 *
 * The Malt.io authentication strategy authenticates requests by delegating to
 * Malt.io's API using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your Malt.io application's client id
 *   - `clientSecret`  your Malt.io application's client secret
 *   - `callbackURL`   URL to which Malt.io will redirect the user after
 *                     granting authorization
 *
 * Examples:
 *
 *     passport.use(new MaltioStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/maltio/callback'
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
  options.authorizationURL = options.authorizationURL || 'https://api.malt.io/account/authorize';
  options.tokenURL = options.tokenURL || 'https://api.malt.io/account/access_token';

  OAuth2Strategy.call(this, options, verify);
  this.name = 'maltio';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);

/**
 * Retrieve user profile from Malt.io.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `maltio`
 *   - `id`
 *   - `displayName`
 *   - `emails`
 *   - `photos`
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  this._oauth2.get('https://api.malt.io/v1/profile.json', accessToken, function (err, body, res) {
    if (err) { return done(new InternalOAuthError('Failed to fetch user profile', err)); }

    try {
      var json = JSON.parse(body);

      var profile = { provider: 'maltio' };
      profile.id = json.id;
      profile.displayName = json.name;
      profile.emails = [{ value: json.email }];
      profile.photos = [{ value: json.image }];

      profile._raw = body;
      profile._json = json;

      done(null, profile);
    } catch(e) {
      done(e);
    }
  });
};

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
