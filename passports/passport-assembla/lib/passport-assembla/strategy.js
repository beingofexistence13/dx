/**
 * Module dependencies.
 */
var util = require('util')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * The Assembla authentication strategy authenticates requests by delegating to
 * Assembla using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your Assembla application's client id
 *   - `clientSecret`  your Assembla application's client secret
 *   - `callbackURL`   URL to which Assembla will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new AssemblaStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/assembla/callback'
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
  options.authorizationURL = options.authorizationURL || ('https://api.assembla.com/authorization');
  options.tokenURL = options.tokenURL || ('https://' + options.clientID + ':' + options.clientSecret + '@api.assembla.com/token');

  OAuth2Strategy.call(this, options, verify);
  this.name = 'assembla';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);


/**
 * Retrieve user profile from Assembla.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `assembla`
 *   - `id`
 *   - `username`
 *   - `displayName`
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  this._oauth2.get('https://api.assembla.com/v1/user', accessToken, function (err, body, res) {
    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }
    
    try {
      var json = JSON.parse(body);
      
      var profile = { provider: 'assembla' };
      if (!json.Profile) {
        profile.id = json.id;
        profile.login = json.login;
        profile.emails = [{ value: json.email }];
        profile.displayName = json.name;
        profile.company = json.organization;
      }
      
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
