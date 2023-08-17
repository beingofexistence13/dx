/**
 * Module dependencies.
 */
var util = require('util')
  , OpenIDStrategy = require('passport-openid').Strategy;


/**
 * `Strategy` constructor.
 *
 * The AOL authentication strategy authenticates requests by delegating to AOL
 * using the OpenID 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `identifier`,
 * and optionally a service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `returnURL`  URL to which AOL will redirect the user after authentication
 *   - `realm`      the part of URL-space for which an OpenID authentication request is valid
 *   - `profile`    enable profile exchange, defaults to _true_
 *
 * Examples:
 *
 *     passport.use(new AOLStrategy({
 *         returnURL: 'http://localhost:3000/auth/aol/return',
 *         realm: 'http://localhost:3000/'
 *       },
 *       function(identifier, profile, done) {
 *         User.findByOpenID(identifier, function (err, user) {
 *           done(err, user);
 *         });
 *       }
 *     ));
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options, validate) {
  options = options || {};
  options.providerURL = options.providerURL || 'https://api.screenname.aol.com/auth/openid/xrds';
  
  // NOTE: If profile exchange is enabled, AOL is redirecting to the following
  //       URL:
  //
  //           https://api.screenname.aol.com/auth/openidSregAx
  //
  //       Unfortunately, that URL is a blank page which doesn't present any UI
  //       to the user, thus halting the OpenID flow.  Until this issue is
  //       addressed, profile exhange is disabled.
  options.profile =  (options.profile === undefined) ? false : options.profile;

  OpenIDStrategy.call(this, options, validate);
  this.name = 'aol';
}

/**
 * Inherit from `OpenIDStrategy`.
 */
util.inherits(Strategy, OpenIDStrategy);


/**
 * Expose `Strategy`.
 */ 
module.exports = Strategy;
