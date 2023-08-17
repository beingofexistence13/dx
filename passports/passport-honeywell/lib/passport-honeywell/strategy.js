
/**
 * Module dependencies.
 */
var util = require('util'),
    OAuth2Strategy = require('passport-oauth2').Strategy;

/**
 * `Strategy` constructor.
 *
 * The Honeywell authentication strategy authenticates with the Honeywell OAuth server to
 * get an access_token for the Honeywell API
 *
 * Options:
 *   - `clientID`      Honeywell client ID
 *   - `clientSecret`  Honeywell secret
 *
 * Examples:
 *
 *     passport.use(new HoneywellStrategy({
 *       clientID: 'Consumer Key',
 *       clientSecret: 'Consumer Secret',
 *     }));
 *
 * @param {Object} options
 * @param {Funciton} verify (optional)
 * @api public
 */
function Strategy(options, verify) {
  options = options || {};
  options.authorizationURL = options.authorizationURL || 'https://api.honeywell.com/oauth2/authorize';
  options.tokenURL = options.tokenURL || 'https://api.honeywell.com/oauth2/token';

  options.state = true;

  options.customHeaders = {
    Authorization: 'Basic ' + Buffer.from(options.clientID + ':' + options.clientSecret).toString('base64')
  };

  // Provide access and refresh tokens and expiry info
  verify = verify || function(accessToken, refreshToken, params, profile, done) {
    done(null, { accessToken: accessToken, refreshToken: refreshToken, expires_in: params.expires_in });
  };

  OAuth2Strategy.call(this, options, verify);

  this.name = 'honeywell';
}

/**
 * Inherit from `OAuth2Strategy`.
 */
util.inherits(Strategy, OAuth2Strategy);

/**
 * Export Strategy constructor.
 */
module.exports = Strategy;
