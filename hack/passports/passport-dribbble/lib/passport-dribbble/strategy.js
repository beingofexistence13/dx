/**
 * Module dependencies.
 */
var util = require('util')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * The Dribbble authentication strategy authenticates requests by delegating to
 * Dribbble using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your Dribbble application's client id
 *   - `clientSecret`  your Dribbble application's client secret
 *   - `callbackURL`   URL to which Dribbble will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new DribbbleStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/Dribbble/callback'
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
  options.authorizationURL = options.authorizationURL || 'https://dribbble.com/oauth/authorize/';
  options.tokenURL = options.tokenURL || 'https://dribbble.com/oauth/token';

  OAuth2Strategy.call(this, options, verify);
  this.name = 'dribbble';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);


/**
 * Retrieve user profile from Dribbble.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `Dribbble`
 *   - `id`               the user's Dribbble ID
 *   - `username`         the user's Dribbble username
 *   - `displayName`      the user's full name
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {

  this._oauth2.get('https://api.dribbble.com/v2/user', accessToken, function (err, body, res) {
    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }

    try {
      var json = JSON.parse(body);

      var profile = { provider: 'dribbble' };

      profile.id = json.id;
      profile.displayName = json.name;
      profile.name = { familyName: json.name,
                       givenName: json.name };
      profile.username = json.username;

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
