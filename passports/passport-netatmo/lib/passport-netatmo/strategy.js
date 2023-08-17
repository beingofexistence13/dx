
/**
 * Module dependencies.
 */
var util = require('util'),
    OAuth2Strategy = require('passport-oauth2').Strategy;

/**
 * `Strategy` constructor.
 *
 * The Netatmo authentication strategy authenticates with the Netatmo OAuth server to
 * get an access_token for the Netatmo API
 *
 * Options:
 *   - `clientID`      Netatmo client ID
 *   - `clientSecret`  Netatmo secret
 *
 * Examples:
 *
 *     passport.use(new NetatmoStrategy({
 *       clientID: NETATMO_ID,
 *       clientSecret: NETATMO_SECRET,
 *     }));
 *
 * @param {Object} options
 * @param {Funciton} verify (optional)
 * @api public
 */
function Strategy(options, verify) {
  options = options || {};
  options.authorizationURL = options.authorizationURL || 'https://api.netatmo.net/oauth2/authorize';
  options.tokenURL = options.tokenURL || 'https://api.netatmo.net/oauth2/token';

  // Netatmo requires the state parameter for increased security
  options.state = true;

  // Provide access and refresh tokens and expiry info
  verify = verify || function(accessToken, refreshToken, params, profile, done) {
    done(null, { accessToken: accessToken, refreshToken: refreshToken, expires_in: params.expires_in });
  };

  OAuth2Strategy.call(this, options, verify);

  this.name = 'netatmo';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);

/**
 * Export Strategy constructor.
 */
module.exports = Strategy;
