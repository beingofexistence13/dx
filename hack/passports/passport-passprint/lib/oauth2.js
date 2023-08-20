/**
 * Module dependencies.
 */
var util = require('util')
  , OAuth2Strategy = require('passport-oauth').OAuth2Strategy
  , InternalOAuthError = require('passport-oauth').InternalOAuthError;


/**
 * `Strategy` constructor.
 *
 * The PassPrint authentication strategy authenticates requests by delegating to
 * PassPrint using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `clientID`      your PassPrint application's client id
 *   - `clientSecret`  your PassPrint application's client secret
 *   - `callbackURL`   URL to which PassPrint will redirect the user after granting authorization
 *
 * Examples:
 *
 *     passport.use(new PassPrintStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/passprint/callback'
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
  options.authorizationURL = options.authorizationURL || 'https://www.passprint.me/auth/oauth2/authorize';
  options.tokenURL = options.tokenURL || 'https://www.passprint.me/auth/oauth2/token';
  
  OAuth2Strategy.call(this, options, verify);
  this.name = 'passprint';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);


/**
 * Retrieve user profile from PassPrint.
 *
 * This function constructs a normalized profile, with the following properties:
 *
 *   - `provider`         always set to `PassPrint`
 *   - `id`
 *   - `username`
 *   - `displayName`
 *
 * @param {String} accessToken
 * @param {Function} done
 * @api protected
 */
Strategy.prototype.userProfile = function(accessToken, done) {
  this._oauth2.get('https://www.passprint.me/api/users/oauth2/profile', accessToken, function (err, body, res) {
    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }
    
    try {
      var json = JSON.parse(body);
      
      var profile = { provider: 'PassPrint' };
      profile.id = json._id;
      profile.displayName = json.name.display;
      profile.name = { familyName: json.name.family,
                       givenName: json.name.given };
      profile.emails = [{ value: json.email }];
      
      profile._raw = body;
      profile._json = json;
      
      done(null, profile);
    } catch(e) {
      done(e);
    }
  });
}


/**
 * Return extra PassPrint-specific parameters to be included in the authorization
 * request.
 *
 * @param {Object} options
 * @return {Object}
 * @api protected
 */
Strategy.prototype.authorizationParams = function(options) {
  var params = {};
  // This parameter can be used to identify the PassPrint account to be authenticated,
  // so the user does not have to input their email address, and speed up the sign in flow
  if (options.passprintId) {
    params['passprint_id'] = options.passprintId;
  }
  return params;
}

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
