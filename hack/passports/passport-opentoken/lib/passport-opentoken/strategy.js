/**
 * Module dependencies
 */
var passport = require('passport-strategy');
var util     = require('util');
var OpenTokenAPI = require('opentoken').OpenTokenAPI;


/**
 * `Strategy` constructor.
 * 
 * The opentoken authentication strategy authenticates requests using OpenToken 
 *
 * Applications must supply a `verify` callback which accepts `token` and calls
 * the `done` callback supplying a `user`, which should be set to `false` if
 * the token is not valid. If an exception occured, `err` should be set.
 *
 * Options including the token password, cipherSuite, and tokenName should be
 * set.
 *
 * Options:
 *  - `password` - secret for encryption / decryption. Null for cipherSuite 0.
 *  - `cipherSuite` - cipher suite used for encryption [0-3]. 0 for no cipher.
 *  - `tokenLifetime` - token lifetime in seconds [300]
 *  - `tokenTolerance` - token time tolerance in seconds [120]
 *  - `tokenRenewal` - token renewal limit in seconds [43200].
 *  - `tokenName` - name of the OpenToken included in callback HTTP request
 * 
 * Examples:
 * 
 *     passport.use(new OpenTokenStrategy({
 *      ...
 */
function Strategy(options, verify) {

  if (typeof options === 'function') {
    verify = options;
    options = {};
  }

  if (!verify) {
    throw new TypeError('OpenToken strategy requires a verify callback');
  }

  if (!options.tokenName) {
    throw new TypeError('OpenToken strategy requires a tokenName options');
  }

  // OpenToken options
  var password    = options.password    || null;
  var cipherSuite = options.cipherSuite || 0;
  var otkOptions = {};
  if (options.tokenLifetime) {
    otkOptions.tokenLifetime = options.tokenLifetime;
  }
  if (options.tokenRenewal) {
    otkOptions.tokenRenewal = options.tokenRenewal;
  }
  if (options.tokenTolerance) {
    otkOptions.tokenTolerance = options.tokenTolerance;
  }

  // Instance properties
  this._opentokenApi = new OpenTokenAPI(cipherSuite, password, otkOptions);
  this._tokenName = options.tokenName;

  passport.Strategy.call(this);
  this.name = 'opentoken';
  this._verify = verify;
  this._passReqToCallback = options.passReqToCallback;
}


/**
 * Inherit from 'passport.Strategy'.
 */
util.inherits(Strategy, passport.Strategy);


/**
 * Authenticate request based on OpenToken and user-supplied `verify` method
 * @param {Object} req HTTP Request object
 * @param {Object} options 
 * Options:
 *  - `tokenName` - Name of GET URL parameter containing token
 */
Strategy.prototype.authenticate = function (req, options) {

  options = options || {};
  var self = this;
  var tokenName = options.tokenName || self._tokenName;
  var token = req.param(tokenName);

  if (!token) {
    return self.fail("OpenToken %s missing from request", tokenName);
  }

  self._opentokenApi.parseToken(token, function (err, data) {

    if (err) {
      // Parsing errors indicate a problem with the token...either it's
      // expired, timestamps don't match up, formatted wrong, cannot be
      // deciphered with the configured password, etc. All of these are
      // problems with the token, not an internal server error, so call
      // `self.fail(message)` resulting in a 401 Unauthorized response,
      // rather than `self.error(err)` for a 500 Internal Server Error.
      return self.fail(err.message);
    }

    if (!data) {
      // As above return 401 Unauthorized not 500 Internal Server Error
      return self.fail("OpenToken missing from request");
    }

    if (!data.subject) {
      // subject is required & should hold ID of the authenticated user
      return self.fail("OpenToken contains no subject");
    }

    function verified(err, user, info) {
      if (err) {
        return self.error(err);
      }
      if (!user) {
        return self.fail(info);
      }
      self.success(user, info);
    }

    if (self._passReqToCallback) {
      self._verify(req, data.subject, verified);
    } else {
      self._verify(data.subject, verified);
    }

  });

};


/**
 * Expose `Strategy`
 */
module.exports = Strategy;
