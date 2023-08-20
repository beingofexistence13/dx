/**
 * Module dependencies.
 */
var passport = require('passport-strategy'),
  util = require('util'),
  utils = require('./utils');

/**
 * `Strategy` constructor.
 *
 * The IfmoSSO authentication strategy authenticates requests using
 * ITMO University account.
 *
 * Options:
 *   - `secretKey`  field provides the secret key for verify the response data
 *   - `passReqToCallback`  when `true`, `req` is the first argument to the verify callback (default: `false`)
 *
 * Examples:
 *
 *    passport.use(new IfmoSSOStrategy({
 *        secretKey: SECRET_KEY
 *      }, function(profile, done) {
 *        User.findOrCreate(..., function (err, user) {
 *          done(err, user);
 *        });
 *      }
 *    ));
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options, verify) {
  if (typeof options == 'function') {
    verify = options;
    options = {};
  }
  if (!verify) {
    throw new TypeError('IfmoSSOStrategy requires a verify callback');
  }

  this._secretKey = options.secretKey;

  passport.Strategy.call(this);
  this.name = 'ifmosso';
  this._verify = verify;
  this._passReqToCallback = options.passReqToCallback;
}

/**
 * Inherit from `passport.Strategy`.
 */
util.inherits(Strategy, passport.Strategy);

/**
 * Authenticate request based on the contents of a form submission.
 *
 * @param {Object} req
 * @api protected
 */
Strategy.prototype.authenticate = function(req, options) {
  options = options || {};
  
  var profile = req.body || {};

  if (!this.checkProfileData(profile)) {
    return this.fail({
      message: options.badRequestMessage || 'Missing credentials'
    }, 400);
  }

  var self = this;

  function verified(err, user, info) {
    if (err) {
      return self.error(err);
    }
    if (!user) {
      return self.fail(info);
    }
    self.success(user, info);
  }

  try {
    if (self._passReqToCallback) {
      this._verify(req, profile, verified);
    }
    else {
      this._verify(profile, verified);
    }
  }
  catch (ex) {
    return self.error(ex);
  }
};

/**
 * Checksum verification.
 */
Strategy.prototype.checkProfileData = function(profile) {
  if (!profile) return false;
  var str = profile.ssoid + profile.lastname + profile.firstname +
    profile.middlename + profile.birthdate + profile.gender + 
    profile.countryCode + profile.roles + profile.ttl + this._secretKey;
  var win1251 = utils.toWin1251(str);
  var hash = utils.sha1(win1251);
  return hash === profile.hash.toLowerCase();
};

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
